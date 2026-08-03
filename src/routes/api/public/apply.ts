import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { buildApplyEmailHtml } from "../../../lib/apply-email.server";

const ApplySchema = z.object({
  fullName: z.string().trim().min(1),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/),
  email: z.string().trim().email(),
  studyCountry: z.string().trim().min(1),
  course: z.string().trim().optional(),
  loanAmount: z.string().trim().optional(),
});

export const Route = createFileRoute("/api/public/apply")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
        }

        const parsed = ApplySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { success: false, message: "Please fill all required fields correctly." },
            { status: 400 },
          );
        }

        const apiKey = process.env["RESEND_API_KEY"];
        if (!apiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json(
            { success: false, message: "Unable to send application right now." },
            { status: 500 },
          );
        }

        const lead = parsed.data;
        const submittedAt = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "medium",
        });

        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
          from: "Harbor Finance <ayush@harborfintech.com>",
          to: ["ayush@harborfintech.com"],
          subject: `New Education Loan Lead | ${lead.fullName} | ${lead.studyCountry}`,
          html: buildApplyEmailHtml(lead, submittedAt),
        });

        if (error) {
          console.error(error);
          return Response.json(
            { success: false, message: "Unable to send application." },
            { status: 500 },
          );
        }

        return Response.json({ success: true, message: "Application submitted successfully." });
      },
    },
  },
});

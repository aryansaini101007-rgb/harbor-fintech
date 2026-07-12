import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ApplyRequest {
  fullName: string;
  phone: string;
  email: string;
  studyCountry: string;
  course?: string;
  loanAmount?: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const {
      fullName,
      phone,
      email,
      studyCountry,
      course,
      loanAmount,
    }: ApplyRequest = req.body;

    // Required fields
    if (
      !fullName?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !studyCountry?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s]{10,15}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const { error } = await resend.emails.send({
      from: "Harbor Finance <ayush@harborfintech.com>",

      to: ["ayush@harborfintech.com"],

      subject: `🎓 New Education Loan Lead | ${fullName} | ${studyCountry}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body style="margin:0;background:#f3f6fb;padding:40px;font-family:Arial,Helvetica,sans-serif;">

<div style="max-width:720px;margin:auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 12px 35px rgba(0,0,0,.08);">

<div style="background:linear-gradient(90deg,#2563eb,#6d4aff);padding:28px;color:white;">

<h2 style="margin:0;font-size:28px;">
Harbor Finance
</h2>

<p style="margin-top:8px;font-size:16px;">
🎓 New Education Loan Lead
</p>

</div>

<div style="padding:35px;">

<div style="
background:#eff6ff;
border:1px solid #bfdbfe;
border-radius:14px;
padding:22px;
margin-bottom:30px;
">

<h3 style="margin:0 0 18px;color:#1d4ed8;">
🔥 Lead Summary
</h3>

<p style="margin:8px 0;font-size:17px;">
<strong>👤 ${fullName}</strong>
</p>

<p style="margin:8px 0;font-size:22px;font-weight:bold;color:#16a34a;">
📞 ${phone}
</p>

<p style="margin:8px 0;">
🌍 ${studyCountry}
</p>

<p style="margin:8px 0;">
💰 ${loanAmount || "Not Provided"}
</p>

</div>

<table width="100%" cellspacing="0" cellpadding="12" style="border-collapse:collapse;">

<tr style="border-bottom:1px solid #ececec;">
<td width="35%"><strong>Full Name</strong></td>
<td>${fullName}</td>
</tr>

<tr style="border-bottom:1px solid #ececec;">
<td><strong>Phone Number</strong></td>
<td>${phone}</td>
</tr>

<tr style="border-bottom:1px solid #ececec;">
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr style="border-bottom:1px solid #ececec;">
<td><strong>Study Country</strong></td>
<td>${studyCountry}</td>
</tr>

<tr style="border-bottom:1px solid #ececec;">
<td><strong>Course</strong></td>
<td>${course || "Not Provided"}</td>
</tr>

<tr style="border-bottom:1px solid #ececec;">
<td><strong>Required Loan Amount</strong></td>
<td>${loanAmount || "Not Provided"}</td>
</tr>

<tr>
<td><strong>Submitted On</strong></td>
<td>${submittedAt}</td>
</tr>

</table>

<hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;" />

<p style="font-size:14px;color:#6b7280;margin:0;">
This lead was generated from the Harbor Finance website.
</p>

</div>

</div>

</body>
</html>
`,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Unable to send application.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
}
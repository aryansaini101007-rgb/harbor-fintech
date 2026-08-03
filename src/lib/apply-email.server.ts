interface Lead {
  fullName: string;
  phone: string;
  email: string;
  studyCountry: string;
  course?: string | undefined;
  loanAmount?: string | undefined;
}

export function buildApplyEmailHtml(lead: Lead, submittedAt: string) {
  const row = (label: string, value: string) => `
<tr style="border-bottom:1px solid #ececec;">
<td width="35%"><strong>${label}</strong></td>
<td>${value}</td>
</tr>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;background:#f3f6fb;padding:40px;font-family:Arial,Helvetica,sans-serif;">
<div style="max-width:720px;margin:auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 12px 35px rgba(0,0,0,.08);">
<div style="background:linear-gradient(90deg,#2563eb,#6d4aff);padding:28px;color:white;">
<h2 style="margin:0;font-size:28px;">Harbor Finance</h2>
<p style="margin-top:8px;font-size:16px;">New Education Loan Lead</p>
</div>
<div style="padding:35px;">
<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:14px;padding:22px;margin-bottom:30px;">
<h3 style="margin:0 0 18px;color:#1d4ed8;">Lead Summary</h3>
<p style="margin:8px 0;font-size:17px;"><strong>${lead.fullName}</strong></p>
<p style="margin:8px 0;font-size:22px;font-weight:bold;color:#16a34a;">${lead.phone}</p>
<p style="margin:8px 0;">${lead.studyCountry}</p>
<p style="margin:8px 0;">${lead.loanAmount || "Not Provided"}</p>
</div>
<table width="100%" cellspacing="0" cellpadding="12" style="border-collapse:collapse;">
${row("Full Name", lead.fullName)}
${row("Phone Number", lead.phone)}
${row("Email", lead.email)}
${row("Study Country", lead.studyCountry)}
${row("Course", lead.course || "Not Provided")}
${row("Required Loan Amount", lead.loanAmount || "Not Provided")}
${row("Submitted On", submittedAt)}
</table>
<hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;" />
<p style="font-size:14px;color:#6b7280;margin:0;">This lead was generated from the Harbor Finance website.</p>
</div>
</div>
</body>
</html>`;
}

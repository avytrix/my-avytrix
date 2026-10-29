import { siteConfig } from "@/lib/config";

// Email template for customer (thank you email)
export function getCustomerEmailTemplate(name: string): string {
  const { name: contactName, phone: contactPhone } = siteConfig.contact;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Avytrix Technologies</title>
</head>
<body style="margin: 0; padding: 0;">
<table style="background-color: #f9fafb;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 20px;" align="center">
<table class="content-table" style="background-color: #ffffff; border-radius: 12px; max-width: 600px;" role="presentation" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 40px 24px 24px 24px;" align="center"><a title="Avytrix Technologies" href="${siteConfig.url}"> <img style="display: block; border-radius: 6px;" src="${siteConfig.cdnUrl}/logos/avytrix-logo.png" alt="Avytrix Technologies Logo" width="150" height="60"> </a></td>
</tr>
<tr>
<td style="padding: 0 24px 16px 24px;" align="center">
<h1 style="font-family: 'Inter', Arial, sans-serif; font-size: 27px; font-weight: bold; color: #2d3748; margin: 0;">Thank You for Reaching Out!</h1>
</td>
</tr>
<tr>
<td style="padding: 0 24px 8px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 16px; color: #4a5568; margin: 0;">Hi ${name},</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 16px; color: #718096; line-height: 1.6; margin: 0;">We have received your message and one of our team will get back to you within <span style="font-weight: 600; color: #0058ee;">24 to 48 working hours</span>. Thank you for your interest in our services.</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;">
<table style="background-color: #ebf8ff; border-radius: 8px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="16">
<tbody>
<tr>
<td>
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 16px; font-weight: 500; color: #0058ee; margin: 0 0 16px 0;">In the meantime, you can read more about what we do:</p>
<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding-bottom: 8px; font-family: 'Inter', Arial, sans-serif; font-size: 18px; color: #0058ee;" valign="top" width="30">✓</td>
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #4a5568; padding-bottom: 8px;" valign="middle">Custom Software Development</td>
</tr>
<tr>
<td style="padding-bottom: 8px; font-family: 'Inter', Arial, sans-serif; font-size: 18px; color: #0058ee;" valign="top" width="30">✓</td>
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #4a5568; padding-bottom: 8px;" valign="middle">Mobile & Web Applications</td>
</tr>
<tr>
<td style="padding-bottom: 8px; font-family: 'Inter', Arial, sans-serif; font-size: 18px; color: #0058ee;" valign="top" width="30">✓</td>
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #4a5568; padding-bottom: 8px;" valign="middle">Cloud Solutions & DevOps</td>
</tr>
<tr>
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 18px; color: #0058ee;" valign="top" width="30">✓</td>
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #4a5568;" valign="middle">ERP, CRM & Automation</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 0 24px 16px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 16px; color: #718096; line-height: 1.6; margin: 0;">If your inquiry is urgent, you can also reach us directly at:</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;" align="center">
<a style="font-family: 'Inter', Arial, sans-serif; font-weight: 600; color: #0058ee; text-decoration: none;" href="tel:${contactPhone.replace(/\s/g, "")}">${contactName}</a>
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #1a202c; margin: 8px 0 0 0;">${contactPhone}</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 18px; font-weight: 600; color: #2d3748; margin: 0;">We look forward to speaking with you soon!</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;">
<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-top: 1px solid #e2e8f0;">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 0 24px 40px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: #a0aec0; margin: 0;">If you did not make this request, please let us know immediately by replying to this email. Read our <a style="color: #0058ee; text-decoration: none;" href="${siteConfig.url}/privacy-policy">Privacy policy</a>.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;
}

// Email template for Avytrix Technologies (new contact notification)
export function getNotificationTemplate(data: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}): string {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    dateStyle: "full",
    timeStyle: "long",
  });

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0;">
<table style="background-color: #f9fafb;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 20px;" align="center">
<table class="content-table" style="background-color: #ffffff; border-radius: 12px; max-width: 600px;" role="presentation" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 40px 24px 24px 24px;" align="center"><a title="Avytrix Technologies" href="${siteConfig.url}"> <img style="display: block; border-radius: 6px;" src="${siteConfig.cdnUrl}/logos/avytrix-logo.png" alt="Avytrix Technologies Logo" width="150" height="60"> </a></td>
</tr>
<tr>
<td style="padding: 0 24px 16px 24px;" align="center">
<h1 style="font-family: 'Inter', Arial, sans-serif; font-size: 27px; font-weight: bold; color: #2d3748; margin: 0;">Requesting quote for new website.</h1>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 16px; color: #718096; line-height: 1.6; margin: 0;">A new contact form has been submitted on the website. Please find the details below.</p>
</td>
</tr>
<tr>
<td style="padding: 0 24px 32px 24px;">
<table style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="16">
<tbody>
<tr>
<td>
<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr style="vertical-align: top;">
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568;" width="150">Full Name:</td>
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748;">${data.name}</td>
</tr>
<tr style="vertical-align: top;">
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568;" width="150">Email Address:</td>
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748;"><a style="color: #0058ee; text-decoration: none;" href="mailto:${data.email}">${data.email}</a></td>
</tr>
<tr style="vertical-align: top;">
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568;" width="150">Company Name:</td>
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748;">${data.company}</td>
</tr>
<tr style="vertical-align: top;">
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568;" width="150">Date of Request:</td>
<td style="padding-bottom: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748;">${timestamp}</td>
</tr>
<tr style="vertical-align: top;">
<td style="padding-bottom: 24px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568;" width="150">Service of Interest:</td>
<td style="padding-bottom: 24px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748;">${data.service}</td>
</tr>
<tr style="vertical-align: top;">
<td style="padding-bottom: 8px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 600; color: #4a5568; border-top: 1px solid #e2e8f0; padding-top: 24px;" colspan="2">Enquiry Message:</td>
</tr>
<tr style="vertical-align: top;">
<td style="font-family: 'Inter', Arial, sans-serif; font-size: 15px; color: #2d3748; line-height: 1.6;" colspan="2">${data.message}</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 0 24px 24px 24px;">
<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-top: 1px solid #e2e8f0;">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 0 24px 40px 24px;" align="center">
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 14px; color: #718096; margin: 0;">Regards,</p>
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 14px; font-weight: 600; color: #2d3748; margin: 4px 0 0 0;">The Avytrix Technologies Team</p>
<p style="font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: #a0aec0; margin: 16px 0 0 0;">This is an automated notification from the Avytrix Technologies website.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;
}

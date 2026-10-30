// Creates or updates the two contact-form templates in Resend from src/lib/email-templates.ts, then publishes them.
// Re-run after editing the templates or the contact/brand env values baked into them:
//   npx -y tsx --env-file=.env.local scripts/resend-templates.mts
import { siteConfig } from "@/lib/config";
import { getCustomerEmailTemplate, getNotificationTemplate } from "@/lib/email-templates";

const API = "https://api.resend.com";
const headers = { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" };
const from = `${siteConfig.email.fromName} <${siteConfig.email.fromEmail}>`;
const v = (key: string) => `{{{${key}}}}`;

// EMAIL is reserved by Resend, hence VISITOR_EMAIL
const templates = [
  {
    alias: "contact-confirmation",
    name: "Contact form: confirmation to visitor",
    subject: `Thank You for Contacting ${siteConfig.name}`,
    from,
    html: getCustomerEmailTemplate(v("NAME")),
    variables: [{ key: "NAME", type: "string" }],
  },
  {
    alias: "contact-team-notification",
    name: "Contact form: new enquiry to team",
    subject: `New enquiry from ${v("NAME")}`,
    from,
    html: getNotificationTemplate({
      name: v("NAME"),
      email: v("VISITOR_EMAIL"),
      company: v("COMPANY"),
      service: v("SERVICE"),
      message: v("MESSAGE"),
      submittedAt: v("SUBMITTED_AT"),
    }),
    variables: ["NAME", "VISITOR_EMAIL", "COMPANY", "SERVICE", "MESSAGE", "SUBMITTED_AT"].map((key) => ({ key, type: "string" })),
  },
];

async function call(method: string, path: string, body?: unknown) {
  const res = await fetch(API + path, { method, headers, body: body && JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${JSON.stringify(json)}`);
  return json;
}

const existing: { id: string; alias: string }[] = (await call("GET", "/templates?limit=100")).data;
for (const t of templates) {
  const found = existing.find((e) => e.alias === t.alias);
  const id = found ? (await call("PATCH", `/templates/${found.id}`, t), found.id) : (await call("POST", "/templates", t)).id;
  await call("POST", `/templates/${id}/publish`);
  console.log(`${found ? "updated" : "created"} and published ${t.alias} (${id})`);
}

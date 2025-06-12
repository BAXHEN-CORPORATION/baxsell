export const SERVICE_PROVIDER_EMAIL = process.env.SERVICE_PROVIDER_EMAIL || "";
export const SERVICE_PROVIDER_NAME = process.env.SERVICE_PROVIDER_NAME || "";
export const SMTP_HOST = process.env.SMTP_HOST || "";
export const SMTP_USER = process.env.SMTP_USER || "";
export const SMTP_PWD = process.env.SMTP_PWD || "";

if (
  !SERVICE_PROVIDER_EMAIL ||
  !SERVICE_PROVIDER_NAME ||
  !SMTP_HOST ||
  !SMTP_USER ||
  !SMTP_PWD
) {
  throw new Error("Missing environment variables for email configuration");
}

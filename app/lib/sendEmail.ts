import emailjs from "@emailjs/browser";

// Replace these with your EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export interface EnquiryData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  interest: string;
  destination?: string;
  message?: string;
}

export async function sendEnquiryEmail(data: EnquiryData): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      service: data.interest,
      destination: data.destination || "Not specified",
      message: data.message || "—",
      to_email: "admin@joggliders.com",
    },
    PUBLIC_KEY
  );
}

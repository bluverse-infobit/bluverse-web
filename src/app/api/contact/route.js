import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, mobile, message } = body;

    // Validate required fields (you could do more robust validation if you want)
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Compose email content
    const emailContent = `
      <h3>Contact Form Submission</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile/Company:</strong> ${mobile || ""}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to multiple recipients
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
        "admin@bluverseinfobit.com",
        "deepak@bluverseinfobit.com",
        // Add more emails if you need
      ],
      subject: "Contact Form Submission",
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}

// Optionally support other methods:
export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

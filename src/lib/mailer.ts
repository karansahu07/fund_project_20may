// lib/mailer.ts
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendAccountEmail(to: string, password: string) {
  const info = await transporter.sendMail({
    from: `"HR Team" <${process.env.EMAIL_FROM}>`,
    to,
    subject: 'Your Employee Account Details',
    html: `
      <p>Hello,</p>
      <p>Your account has been created. Here are your credentials:</p>
      <p><strong>Email:</strong> ${to}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p>Please login and change your password after first login.</p>
    `,
  });
  return info;
}

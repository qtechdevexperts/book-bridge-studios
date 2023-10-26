// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { email: any; name: any; contact: any; service: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    try {
      const { email, name, contact, service, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'mail.bookbridgestudio.com', // Specify the email service provider
        auth: {
          user: 'support@bookbridgestudio.com',
          pass: 'k;M%BG.A;M8*', // Your email password or app-specific password
        },
      });

      const mailOptions = {
        from: 'no-reply@bookbridgestudio.com', // Your email address
        to: 'info@bookbridgestudio.com', // Recipient's email address
        subject: 'Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Contact: ${contact}
          Service: ${service}
          Message: ${message}
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      console.log(info);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

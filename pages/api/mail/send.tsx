import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { email, name, contact, service, message } = req.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.bookbridgestudio.com", // Specify the email service provider
      auth: {
        user: "support@bookbridgestudio.com",
        pass: "k;M%BG.A;M8*", // Your email password or app-specific password
      },
      secure: true,
    });

    const mailOptions = {
      from: "no-reply@bookbridgestudio.com", // Your email address
      to: "info@bookbridgestudio.com", // Recipient's email address
      subject: "Contact Form Submission",
      text: `
                Name: ${name}
                Email: ${email}
                Contact: ${contact}
                Service: ${service}
                Message: ${message}
              `,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        return res.status(400).json({ error: "email not sent" });
      } else {
        return res.status(200).json({ message: "Email sent", info: info });
      }
    });
    //   res.status(200);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;

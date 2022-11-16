import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { firstName, lastName, Email, Message, Subject, Phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    secure: false,
    port: 587, // port for secure SMTP
    requireTLS: true,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: Email,
      to: "support@placeable.co.uk",
      subject: `Contact form submission from ${firstName}`,
      html: `<p>You have a new contact form submission</p><br>
       <p><strong>Name: </strong> ${firstName} ${lastName} </p><br>
       <p><strong>Phone: </strong> ${Phone} </p><br>
              <p><strong>Subject: </strong> ${Subject} </p><br>
       <p><strong>Message: </strong> ${Email} </p><br>
       <p><strong>Message: </strong> ${Message} </p><br>
       `,
    });

    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REACT_APP_SMTP_MAIL,
    pass: process.env.REACT_APP_SMTP_PASSWORD,
  },
});

export const sendEmail = async (body) => {
  const mailOptions = {
    from: process.env.REACT_APP_SMTP_MAIL,
    to: "ziyauddintechsunset@gmail.com",
    subject: "Portfolio Message",
    text: `
      Sender Name: ${body.fullname}

      Sender Email: ${body.email}

      Sender Message: ${body.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};

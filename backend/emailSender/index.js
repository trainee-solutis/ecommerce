import  express  from "express";
import bodyParser from "body-parser";
import  cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const message = req.body.message;
  const subject = req.body.subject;
  const name = req.body.name;
  const email = req.body.to;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b20ab98ae8a4bd",
      pass: "d5fa03cae98081"
    }
  });

  const mailOptions = {
    from: "ecommerce@gmail.com",
    to: `${email}`,
    subject: `${name} - ${subject}`,
    text: `
       ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

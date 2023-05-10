const cron = require("node-cron");
const nodemailer = require("nodemailer");

// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d7cda30467ab1",
    pass: "a648ac3c70a3be",
  },
});

// Sending emails every Wednesday.
cron.schedule("* * * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");

  let messageOptions = {
    from: "Kami.shah@gmail.com",
    to: "adeel.aftab@live.com",
    subject: "Scheduled Email",
    text: "Hi there. This email was automatically sent by us.",
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

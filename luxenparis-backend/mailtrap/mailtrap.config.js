import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

// export const sender = {
//   email: "hello@luxenparis.com",
//   name: "Anmol Jha",
// };

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Anmol Jha",
};

// const recipients = [
//   {
//     email: "anmoljha080@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

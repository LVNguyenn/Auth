import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.ENDPOINT_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Nguyen",
};

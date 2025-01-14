import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      console.log(name, email, message);
      // Send the email using your preferred method (e.g., Nodemailer)
      // ...

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

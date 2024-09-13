import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";
import { connectDB } from "@/lib/mongodb";
import User, { UserDocument } from "@/models/User";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const form = new multiparty.Form();
    const data: {
      fields: { name: string; email: string; message: string };
      files: any;
    } = await new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) reject({ err });
        resolve({ fields, files });
      });
    });
    const { name, email, message } = data.fields;
    await User.create({
      name: name[0],
      email: email[0],
      message: message[0],
    });

    res.status(200).json({ message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message " });
  }
};

export default handler;
export const config = {
  api: {
    bodyParser: false,
  },
};

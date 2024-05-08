import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";
import prisma from '@/utils/prisma'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new multiparty.Form();
    const data: { fields: { name: string; email: string; message: string; }, files: any } = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
const { name, email, message } = data.fields
  // Create one Contact
const newContact = await prisma.contact.create({
  data: {
    name: name[0],
    email: email[0],
    message: message[0],
  }
})
  res.status(200).json({ data });
  
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' })
  }
  
};

export default handler;
export const config = {
  api: {
    bodyParser: false,
  },
};
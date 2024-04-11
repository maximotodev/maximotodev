// import type { NextApiRequest, NextApiResponse } from 'next';


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {

//   const data = JSON.stringify(req.body)
//   console.log(data)
//   res.status(200).json( { data: data } )

// }

import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new multiparty.Form();
  const data: { fields: { name: any; email: any; message: any; }, files: any } = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
  
  const { name, email, message } = data.fields

  console.log(name[0], email[0], message[0])
  
  res.status(200).json({ data: data });
};

export default handler;
export const config = {
  api: {
    bodyParser: false,
  },
};
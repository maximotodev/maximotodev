import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const { data, error } = await supabaseClient
        .from("contacts")
        .insert([{ name, email, message }]);

      if (error) {
        console.error("Error creating contact:", error);
        return res.status(500).json({ error: "Failed to create contact" });
      }

      res.status(201).json({ message: "Contact created successfully", data });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Failed to create contact" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

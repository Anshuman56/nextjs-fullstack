"use server";

import Message from "./lib/models/Message";
import { dbConnect } from "./lib/mongodb";

export async function createMessage(formData: FormData) {
  await dbConnect();
  const author = formData.get("author") as string;
  const text = formData.get("text") as string;
  await Message.create({ author, text });
}

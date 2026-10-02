"use server";

import { revalidatePath } from "next/cache";
import Message from "./lib/models/Message";
import { dbConnect } from "./lib/mongodb";

export async function createMessage(formData: FormData) {
  await dbConnect();
  const author = formData.get("author") as string;
  const text = formData.get("text") as string;
  await Message.create({ author, text });
  revalidatePath("/");
}

export async function deleteMessage(id: string) {
  await dbConnect();
  await Message.findByIdAndDelete(id);
  revalidatePath("/");
}

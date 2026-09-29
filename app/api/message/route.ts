import message from "@/app/lib/models/Message";
import { dbConnect } from "@/app/lib/mongodb";

export async function GET() {
  await dbConnect();
  const messages = await message.find({}).lean();
  return Response.json(messages);
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const messages = await message.create(body);
  return Response.json(messages, { status: 201 });
}

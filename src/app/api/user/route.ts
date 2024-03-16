import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
  const { name, email, sub, picture } = await request.json();

  const role = "user";
  const status = "initial";
  const userId = sub;
  const image = picture;

  await connectMongoDb();
  await User.create({ name, email, userId, image, role, status });

  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}

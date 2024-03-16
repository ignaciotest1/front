import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
  const { email, status } = await request.json();

  await connectMongoDb();
  await User.updateOne({ email }, { $set: { status: status } });

  return NextResponse.json(
    { message: "User had been updated" },
    { status: 201 }
  );
}

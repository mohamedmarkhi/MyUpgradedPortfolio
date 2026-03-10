import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/portfolioDB";

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI);
}

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Form data:", body);

    const newContact = new Contact(body);
    await newContact.save();

    return NextResponse.json({ message: "Saved successfully" });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI!;
if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  message: String,
});

// Avoid "OverwriteModelError" when redeploying on Vercel
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Ensure single mongoose connection
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const contact = new Contact(data);
    await contact.save();

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
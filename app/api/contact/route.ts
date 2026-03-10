// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI environment variable is required.");
// }

// type MongooseConnection = {
//   isConnected?: number;
//   promise?: Promise<typeof mongoose>;
// };

// // Cached connection to avoid reconnecting in serverless environments.
// const globalWithMongoose = globalThis as typeof globalThis & { mongooseConnection?: MongooseConnection };
// if (!globalWithMongoose.mongooseConnection) {
//   globalWithMongoose.mongooseConnection = {};
// }

// async function dbConnect() {
//   if (globalWithMongoose.mongooseConnection.isConnected === 1) {
//     return mongoose;
//   }

//   if (globalWithMongoose.mongooseConnection.promise) {
//     await globalWithMongoose.mongooseConnection.promise;
//     return mongoose;
//   }

//   globalWithMongoose.mongooseConnection.promise = mongoose
//     .connect(MONGODB_URI)
//     .then((conn) => {
//       globalWithMongoose.mongooseConnection.isConnected = mongoose.connection.readyState;
//       return conn;
//     })
//     .catch((connectionError) => {
//       globalWithMongoose.mongooseConnection.promise = undefined;
//       console.error("DB connect failed", connectionError);
//       throw connectionError;
//     });

//   await globalWithMongoose.mongooseConnection.promise;
//   return mongoose;
// }

// const ContactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   projectType: String,
//   message: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Contact =
//   mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// type ContactInput = {
//   name: string;
//   email: string;
//   projectType?: string;
//   message: string;
// };

// function validateContact(input: any): { valid: boolean; data?: ContactInput; error?: string } {
//   if (typeof input !== "object" || input === null) {
//     return { valid: false, error: "Invalid payload" };
//   }

//   const name = typeof input.name === "string" ? input.name.trim() : "";
//   const email = typeof input.email === "string" ? input.email.trim() : "";
//   const projectType = typeof input.projectType === "string" ? input.projectType.trim() : "";
//   const message = typeof input.message === "string" ? input.message.trim() : "";

//   if (!name) {
//     return { valid: false, error: "Name is required" };
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email || !emailRegex.test(email)) {
//     return { valid: false, error: "Valid email is required" };
//   }

//   if (!message || message.length < 10) {
//     return { valid: false, error: "Message must be at least 10 characters" };
//   }

//   return {
//     valid: true,
//     data: {
//       name,
//       email,
//       projectType,
//       message,
//     },
//   };
// }

// export async function POST(req: Request) {
//   try {
//     await dbConnect();

//     const body = await req.json();
//     const validated = validateContact(body);

//     if (!validated.valid || !validated.data) {
//       return NextResponse.json({ error: validated.error ?? "Invalid contact data" }, { status: 400 });
//     }

//     // minimal, non-sensitive telemetry
//     console.info("Contact form submission received", { hasEmail: Boolean(validated.data.email) });

//     const newContact = new Contact(validated.data);
//     await newContact.save();

//     return NextResponse.json({ message: "Saved successfully" });
//   } catch (error) {
//     console.error("API ERROR:", error);
//     return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
//   }
// }
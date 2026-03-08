import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import xss from "xss-clean";
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from "helmet";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(express.json());


app.use("/api/admin", adminRoutes); // Admin routes for dashboard data retrieval

app.use(helmet()); // Set security headers

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 9, // max 9 requests per IP per minute
  message: { success: false, message: "Too many requests, please try again later." }
});

app.use("/api/contact", limiter);

app.use(mongoSanitize()); // Remove $ and . from inputs to prevent Mongo injection
app.use(xss());           // Clean HTML, JS, CSS from input

app.use(cors({
    origin: "https://mohamedmarkhi.dev", // just allow requests from our frontend 
}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Markhi-Portfolio")
  .then(()=> console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api", contactRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
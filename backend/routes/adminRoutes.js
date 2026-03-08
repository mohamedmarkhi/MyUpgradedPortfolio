import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// Get all contacts (dashboard)
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); 
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
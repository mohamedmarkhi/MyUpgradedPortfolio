import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {

    const { name, email, projectType, message } = req.body;

    const contact = new Contact({
      name,
      email,
      projectType,
      message
    });

    await contact.save();

    res.status(200).json({
      success: true,
      message: "Message received"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

export default router;
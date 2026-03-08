import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {

    console.log("DATA RECEIVED:", req.body);

    const contact = new Contact(req.body);

    await contact.save();

    res.status(200).json({ success: true });

  } catch (error) {

    console.error(error);

    res.status(500).json({ success: false });

  }
});

export default router;
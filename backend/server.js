import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// connect database
mongoose.connect("mongodb://127.0.0.1:27017/myPortfolioDB")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  message: String,
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// API route
app.post("/api/contact", async (req,res)=>{
  try{
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({message:"Saved"});
  }catch(error){
    res.status(500).json({error:error.message});
  }
});

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});
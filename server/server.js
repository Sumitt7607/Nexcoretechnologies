const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ================= MONGODB ================= */

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))


/* ================= MODEL ================= */

const reviewSchema = new mongoose.Schema({
name:String,
role:String,
text:String
},{timestamps:true})

const Review = mongoose.model("Review",reviewSchema)


/* ================= ADD REVIEW ================= */

app.post("/api/review", async(req,res)=>{

try{

console.log("BODY:",req.body)

const {name,role,text} = req.body

const newReview = new Review({
name,
role,
text
})

await newReview.save()

res.json({
message:"Review saved",
data:newReview
})

}catch(err){

console.log(err)

res.status(500).json({
error:"Failed to save review"
})

}

})


/* ================= GET REVIEWS ================= */

app.get("/api/reviews", async(req,res)=>{

const reviews = await Review.find().sort({createdAt:-1})

res.json(reviews)

})


/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running on port",PORT)
})
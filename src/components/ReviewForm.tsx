import { useState } from "react"

const ReviewPage = () => {

const [name,setName] = useState("")
const [role,setRole] = useState("")
const [text,setText] = useState("")

const submitReview = async(e)=>{

e.preventDefault()

await fetch("https://nexcorebackend.vercel.app/api/review",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
role,
text
})
})

alert("Review submitted successfully")

setName("")
setRole("")
setText("")
}

return(

<div className="max-w-xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-6">
Write Your Review
</h1>

<form onSubmit={submitReview} className="flex flex-col gap-4">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-3"
/>

<input
type="text"
placeholder="Your Role / Company"
value={role}
onChange={(e)=>setRole(e.target.value)}
className="border p-3"
/>

<textarea
placeholder="Write your review"
value={text}
onChange={(e)=>setText(e.target.value)}
className="border p-3"
/>

<button className="bg-orange-500 text-white p-3">
Submit Review
</button>

</form>

</div>

)

}

export default ReviewPage
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {

const [testimonials,setTestimonials] = useState([])
const [active,setActive] = useState(0)

useEffect(()=>{

fetch("http://localhost:5000/api/reviews")
.then(res=>res.json())
.then(data=>{
console.log("REVIEWS:",data)
setTestimonials(data)
})

},[])


const next = ()=>{
setActive((a)=>(a+1)%testimonials.length)
}

const prev = ()=>{
setActive((a)=>(a-1+testimonials.length)%testimonials.length)
}


if(testimonials.length===0){
return(
<section className="py-10 text-center">
<p>No reviews yet</p>
</section>
)
}

return(

<section className="py-5 relative">

<div className="container mx-auto px-6">

<SectionHeading tag="◈ TESTIMONIALS" title="Client Voices" />

<div className="max-w-3xl mx-auto">

<motion.div
key={active}
initial={{opacity:0,x:30}}
animate={{opacity:1,x:0}}
transition={{duration:0.5}}
className="glass-card rounded-3xl p-12 text-center"
>

<Quote className="w-10 h-10 text-primary/20 mx-auto mb-6"/>

<p className="text-lg mb-6">
"{testimonials[active].text}"
</p>

<p className="font-bold">
{testimonials[active].name}
</p>

<p className="text-sm text-primary">
{testimonials[active].role}
</p>

</motion.div>

<div className="flex justify-center gap-6 mt-8">

<button onClick={prev}>
<ChevronLeft/>
</button>

<button onClick={next}>
<ChevronRight/>
</button>

</div>

</div>

</div>

</section>

)

}

export default TestimonialsSection
import React from "react"
function card({title, paragraph, image})
{
    return(<section  >
    <img src= {image} alt="title">
    <h2>{title}</h2>
    <p> {paragraph}
    </p>
    </img>
</section>)
}
export default card

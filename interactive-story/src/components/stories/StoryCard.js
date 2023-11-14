import React from "react"
import card from "./card.module.css"

function StoryCard({title, paragraph, image})
{
    return(
        <section className={card.cardContainer}>
            <img src={image} alt="Story 1"/>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </section>
    )
}
export default StoryCard

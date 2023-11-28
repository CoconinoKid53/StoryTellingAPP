import React from "react"
import card from "./card.module.css"

function StoryCard({title, paragraph, image})
{
    return(
        <section className={card.cardContainer}>
            <img src={image} alt="Story Card"/>
            <h2 className={card.title}>{title}</h2>
            <p>{paragraph}</p>
        </section>
    )
}
export default StoryCard

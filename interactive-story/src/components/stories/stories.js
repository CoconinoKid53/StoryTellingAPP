import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import stories from "./stories.module.css"
import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";
import option1 from '../assets/option1.svg'
import the_witch from '../assets/the_witch.png'

import BabaYaga from "./babaYaga";

function Stories(){
    
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div className={stories.optionContainer}>
                        <Link to='/StoryOne' className={stories.options}>                        
                            <StoryCard image={option1} title="Story 1" paragraph="Ready to jump into an adventure with Tim as he makes his way to school?"/>
                        </Link>

                        <Link to='/BabaYaga' className={stories.options}>
                            <StoryCard image={the_witch} title="Baba Yaga: The Witch" paragraph="Can you outsmart the witch?"/>
                        </Link>

                        <Link to='/StoryThree' className={stories.options}>                        
    
                        <StoryCard image={option1} title="Story 3" paragraph="Explore the Enchanted Forest and see what you find"/>
                        </Link>
                        <StoryCard image={option1} title="Option 1" paragraph="Help Chloe on her way to school!"/>
                    </div>
                    <div>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Stories;
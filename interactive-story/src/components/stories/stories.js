import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import stories from "./stories.module.css"
import { Link } from "react-router-dom";
import {db} from "../../firestore"
import StoryCard from "./StoryCard";
import option1 from '../assets/option1.svg'
import StoryOne from "./story1";

function Stories(){
    
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div className={stories.optionContainer}>
                        <Link to='/StoryOne' className={stories.options}>                        
                            <StoryCard image={option1} title="Option 1" paragraph="Ready to jump into an adventure with Chloe as she makes her way to school?"/>
                        </Link>
                        <StoryCard image={option1} title="Option 1" paragraph="Ready to jump into an adventure with Chloe as she makes her way to school?"/>
                        <StoryCard image={option1} title="Option 1" paragraph="Ready to jump into an adventure with Chloe as she makes her way to school?"/>
                        <StoryCard image={option1} title="Option 1" paragraph="Ready to jump into an adventure with Chloe as she makes her way to school?"/>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Stories;
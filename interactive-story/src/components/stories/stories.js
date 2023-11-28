import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import { Link } from "react-router-dom";

import StoryOne from "./story1";
import BabaYaga from "./babaYaga";

function Stories(){
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div>
                    <StoryOne documentId={'A1'} />
                    </div>
                    <div>
                    <BabaYaga documentId={'A1'} />
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Stories;
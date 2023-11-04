import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import { Link } from "react-router-dom";
import JournalEntries from "./story1";

function Stories(){
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div>
                        <JournalEntries />
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Stories;
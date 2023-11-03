import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import { Link } from "react-router-dom";

function Stories(){
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div>

                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Stories;
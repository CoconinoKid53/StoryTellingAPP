import { Link } from "react-router-dom"
import Background from "../background";
import EmphasizedButton from "../button";
import homecontent from "./homecontent.module.css"
import homeImage from "../assets/homeimage.svg"

function HomeContent() {
    return(
        <div class={homecontent.container}>
            <Background>
                <div className={homecontent.contents}>
                    <div className={homecontent.left}>
                        <h2>WELCOME!</h2>
                        <p> The purpose of this website is to provide simplistic education for children to teach morals and good choices. This project was developed in a team of 4 over the course of 12 weeks. The purpose of this site is to demonstrate our ability to develop in a team environment and to push our knowledge in new and unfamiliar fields. We hope you enjoy this small project, and hope you and your children can learn something helpful! Please feel free to provide feedback and ask questions by visiting the Contact Us page! </p>
                        <Link to="/Stories"><EmphasizedButton content="START NOW"/></Link>
                    </div>
                    <div class={homecontent.imageContainer}>
                        <img src={homeImage}/>
                    </div>
                </div>
            </Background>
        </div>
    )
}

export default HomeContent;
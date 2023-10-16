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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                        <EmphasizedButton content="START NOW"/>
                    </div>
                    <div>
                        <img src={homeImage}/>
                    </div>
                </div>
            </Background>
        </div>
    )
}

export default HomeContent;
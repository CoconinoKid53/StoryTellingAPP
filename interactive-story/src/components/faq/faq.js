import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import question from "../assets/questions.svg"
import homecontent from "../homepage/homecontent.module.css"
import faq from "./faq.module.css"

function FAQ(){
    return(
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div className={homecontent.contents}>
                        <div className={faq.left}>
                            <h2>Frequently Asked Question</h2>
                            <div className={faq.questions}>
                                <div>
                                    <h3>Question 1?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                                <div>
                                    <h3>Question 2?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                                <div>
                                    <h3>Question 3?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>
                        <div class={homecontent.imageContainer}>
                            <img src={question}/>
                        </div>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default FAQ;
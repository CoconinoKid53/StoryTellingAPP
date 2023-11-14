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
                                    <h3>How long did it take to complete this project?</h3>
                                    <p>This web app was completed between a team of 4 college students. We dedicated around 4-6 hours every week for about 12 weeks.</p>
                                </div>
                                <div>
                                    <h3>How did you create this?</h3>
                                    <p>This we primarily coded this using React. We also utilized Google Firestore to host our database.</p>
                                </div>
                                <div>
                                    <h3>Why did you choose to do this?</h3>
                                    <p>We chose to do a story telling app because we thought it would be a fun way to learn how to integrate a database to a website under a team environment.</p>
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
import NavBar from "../navbar/nav"
import Background from "../background"
import home from "../homepage/home.module.css"
import homecontent from "../homepage/homecontent.module.css"
import contactimage from "../assets/contact.svg"
import contact from "./contact.module.css"
import EmphasizedButton from "../button"

function Contacts(){
    return (
        <div className={home.container}>
            <NavBar/>
            <div>
                <Background>
                    <div className={homecontent.contents}>
                        <div className={contact.leftSide}>
                            <h2>Contact Us</h2>
                            <div>
                                <form action="" method="" className={contact.usesForm}>
                                    <div class={contact.labels}>
                                        <p><label for="name">Enter your name </label></p>
                                        <input className={contact.inputs} size="50" type="text" name="name" id="name" required />
                                    </div>
                                    <div class={contact.labels}>
                                        <p><label for="email">Enter your email </label></p>
                                        <input className={contact.inputs} size="50" type="email" name="email" id="email" required />
                                    </div>
                                    <div class={contact.labels}>
                                        <p><label for="message">Message</label></p>
                                        <textarea></textarea>
                                    </div>
                                    <div class={contact.submitBtn}>
                                        <EmphasizedButton content="Send Message"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class={homecontent.imageContainer}>
                            <img src={contactimage}/>
                        </div>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Contacts;
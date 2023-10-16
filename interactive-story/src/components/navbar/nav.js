import nav from "./nav.module.css"
import logo from "./assets/logo.svg"
import homeIcon from "./assets/home.svg"
import storiesIcon from "./assets/stories.svg"
import faqIcon from "./assets/faq.svg"
import contactIcon from "./assets/contact.svg"

function NavBar() {
    return(
        <div className={nav.container}>
            <div>
                <img src={logo}/>
                <h1>Tale Trek</h1>
            </div>
            <nav>
                <ul>
                    <li className={nav.links}>
                        <img src={homeIcon}/> 
                        <a href="#">Home</a>
                    </li>
                    <li className={nav.links}>
                        <img src={storiesIcon}/> 
                        <a href="#">Stories</a>
                    </li>
                    <li className={nav.links}>
                        <img src={faqIcon}/> 
                        <a href="#">FAQ</a>
                    </li>
                    <li className={nav.links}>
                        <img src={contactIcon}/> 
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
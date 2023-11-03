import { Link } from "react-router-dom"
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
                        <Link to="/">Home</Link>
                    </li>
                    <li className={nav.links}>
                        <img src={storiesIcon}/> 
                        <Link to="/Stories">Stories</Link>
                    </li>
                    <li className={nav.links}>
                        <img src={faqIcon}/> 
                        <Link to="/FAQ">FAQ</Link>
                    </li>
                    <li className={nav.links}>
                        <img src={contactIcon}/> 
                        <Link to="/Contacts">Contacts Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
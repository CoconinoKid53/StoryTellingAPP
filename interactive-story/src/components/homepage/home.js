import NavBar from "../navbar/nav";
import HomeContent from "./homeContent";
import home from "./home.module.css"

function Homepage() {
    return (
        <div className={home.container}>
            <NavBar />
            <HomeContent />
        </div>
    )
}

export default Homepage;
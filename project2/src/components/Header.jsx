import HomePage from "../pages/HomePage"
import { Link } from "react-router-dom"

function Header(){
return (

    <header>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/aboutme" >AboutMe </Link>
        </li>
    </ul>
    </header>

)
}
export default Header
import Avatar from "./Avatar"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/article">Article</Link></li>
            </ul>
            <Avatar />
        </nav>
    )
}

export default Navbar
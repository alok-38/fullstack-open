import { Link } from "react-router-dom"

const Article = () => {
    return (
        <article>
            <h1>My First Component</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ol>
            <Link className="link" to="/">Go Back to Home</Link>
        </article>
    )
}

export default Article
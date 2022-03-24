import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <h1>Page not found</h1>
            <Link style = {{fontSize:"25px"}} to="/">Go to homepage</Link>
        </>
    )
}

export default ErrorPage
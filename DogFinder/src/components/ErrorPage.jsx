import './ErrorPage.css';


export const ErrorPage = ({focusInput}) => {
    return (
        <div className="error-container">
            <div className="error-code">404</div>
            <div className="error-message">Error: Page Not Found</div>
            <div className="error-description">
                Sorry, but the page you are looking for does not exist. Please try again
            </div>
            <a className="home-link" onClick={focusInput} >Again</a>
        </div>
    )
}
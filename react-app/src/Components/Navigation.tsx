import "./Navigation.css"

function Navigation(){
    return(
            <nav className="navigation">
                <ul className="desktop-navigation">
                    <li className="navigation-item">
                        <a className="navigation-link navigation-link--active" aria-current="page">
                            <span className="navigation-icon navigation-icon--person" aria-hidden="true"></span>
                            Home
                        </a>
                    </li>

                    <li className="navigation-item">
                        <a className="navigation-link">
                            <span className="navigation-icon navigation-icon--code" aria-hidden="true"></span>
                            Skills
                        </a>
                    </li>

                    <li className="navigation-item">
                        <a className="navigation-link">
                            <span className="navigation-icon navigation-icon--project" aria-hidden="true"></span>
                            Projects
                        </a>
                    </li>

                    <li className="navigation-item">
                        <a className="navigation-link">
                            <span className="navigation-icon navigation-icon--mail" aria-hidden="true"></span>
                            Contact
                        </a>
                    </li>
                </ul>

                <button className="theme-toggle" type="button" aria-label="Light Mode aktivieren">
                    <span className="navigation-icon navigation-icon--light" aria-hidden="true"></span>
                </button>
            </nav>
    )
}

export default Navigation;

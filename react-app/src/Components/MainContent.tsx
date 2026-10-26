import "./MainContent.css";
import Navigation from "./Navigation"

function MainContent() {
    return (
        <div className="card background-card">
            <div id="header">
                <header className="header">
                    <div className="container">
                        <Navigation />
                    </div>
                </header>
            </div>

            <main className="home-main">
            </main>
        </div>
    );
}

export default MainContent;

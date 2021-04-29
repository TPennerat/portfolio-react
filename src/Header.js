import "./Header.css";

function Header() {
    return (
        <div className="header">
            <header className="main">
                <nav className="navigation">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}


export default Header;
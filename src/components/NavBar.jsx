import leonardoLogo from '../img/leonardo-logo.png';

const NavBar = () => {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={leonardoLogo} alt="leonardo developer logo"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#me">ME</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default NavBar;
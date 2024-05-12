/*import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";*/

const NavBar = () => {
    /*const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        }

        window.addEventListener("scroll", onScroll); // Sets scrolled to TRUE if user scrolls 50px down the window page

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => { // Updates the section that the user is currently in
        setActiveLink(value);
    }*/

    return ( // Upper navigation bar section with buttons to move between the portfolio sections
        /*<Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects`")}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    Texto de prueba
                </span>
                <br/>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's connect</span>
                </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Skills</a>
                <a href="/#">Projects</a>
            </nav>
        </header>
    )
}

export default NavBar
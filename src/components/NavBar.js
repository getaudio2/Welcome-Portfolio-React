import {Navbar, Nav, Container} from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={} alt="" /></a>
                        <a href="#"><img src={} alt="" /></a>
                        <a href="#"><img src={} alt="" /></a>
                    </div>
                </span>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's connect</span>
                </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
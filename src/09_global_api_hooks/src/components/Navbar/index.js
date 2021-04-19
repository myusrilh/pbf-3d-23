import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../assets/css/style.css'

export default function NavbarTemplate(){

    return(
        <div>
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand href="#">Global API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">Beranda</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/blog">Blog</Link>
                </Nav.Link>
                {/* <NavDropdown title="Codelabs" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to={`${match.url}/konsep-reactjs`}>Konsep ReactJS</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to={`${match.url}/belajar-react-router`}>
                        Belajar React Router
                    </Link>
                    </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
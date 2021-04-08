import {
    Link
} from "react-router-dom";


import {Container,Nav,NavbarBrand} from 'react-bootstrap';

export default function Navbar(){
    return(
    <div className="tm-header">
        <Container fluid>
            <div className="tm-header-inner">
                <NavbarBrand href="#" className="tm-site-name">Classic</NavbarBrand>
                
                <Nav className="navbar tm-main-nav">

                    <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                        &#9776;
                    </button>
                    
                    <div className="collapse navbar-toggleable-sm" id="tmNavbar">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>                        
                    </div>
                </Nav>  
                
            </div>                                  
        </Container>            
    </div>
    );
  }
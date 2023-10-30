import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from "next/image";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '@/public/images/logo.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CollapsibleExample() {

    // active class
    //assigning location variable
    const location = useRouter();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    // Sidebar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    return (
        <>

            <Navbar sticky="top" className="">
                <Container>
                    <Navbar.Brand href={"/"}>
                        <Image src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <button type="button" onClick={toggleShow} className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} responsive={"lg"}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Navbar.Brand href={"/"}>
                                    <Image src={Logo} alt="logo" />
                                </Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav>
                                <Nav.Link href={"/"} className={splitLocation[1] === "" ? "active" : ""}>Home</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/services/book-writing">Book Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/ebook-writing">E-book Writing &amp; Publishing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/proofreading">Book Editing &amp; Proofreading</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/book-cover-design">Book Cover Design</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/book-illustration">Book Illustrations</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/book-publishing">Book Publishing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/book-printing">Book Printing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/book-marketing">Book Marketing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/author-website">Author Website</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/amazon-publishing">Amazon Publishing</NavDropdown.Item>
                                    <NavDropdown.Item href="/services/article-writing-services">Article Writing</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/services/kindle-vella">Kindle Vella</NavDropdown.Item> */}
                                   
                                </NavDropdown>
                                <Nav.Link href={"/portfolio"} className={splitLocation[1] === "portfolio" ? "active" : ""}>Portfolio</Nav.Link>
                                <Nav.Link href={"/testimonials"} className={splitLocation[1] === "testimonials" ? "active" : ""}>Testimonials</Nav.Link>
                                <Nav.Link href={"/about-us"} className={splitLocation[1] === "about-us" ? "active" : ""}>About Us</Nav.Link>
                                <Nav.Link href={"/contact-us"} className={splitLocation[1] === "contact-us" ? "active" : ""}>Contact Us</Nav.Link>
                                <Nav.Link href={"tel:3236140274"} ><i className="icon-Call"></i> (323) 614-0274</Nav.Link>
                                <Button variant='white' href="/contact-us">Chat With Us</Button>
                            </Nav>

                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default CollapsibleExample;
import React from "react"
import Image from "next/image";
import { Col, Row } from "react-bootstrap"
import Logo from "@/public/images/logo.svg"
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <Row>
                        <Col lg="4" className="pe-lg-5 mb-lg-0 mb-3">
                            <Link href={"/"}>
                                <Image src={Logo} className="logo mb-4" alt="" />
                            </Link>
                            <p>We produce books that influence the literary sphere and enhance your worth as an author. We collaborate with you to produce the best possible results that align with your goals, engage your audience and create a buzz around your book.</p>
                        </Col>
                        <Col lg="4" sm="6">
                            <h5 className="title">Services</h5>
                            <ul className="footer-links">
                                <li><Link href="/services/ebook-writing">E-book Writing &amp; Publishing</Link></li>
                                <li><Link href="/services/proofreading">Book Editing &amp; Proofreading</Link></li>
                                <li><Link href="/services/book-cover-design">Book Cover Design</Link></li>
                                <li><Link href="/services/book-illustration">Book Illustrations</Link></li>
                                <li><Link href="/services/book-publishing">Book Publishing</Link></li>
                                <li><Link href="/services/book-printing">Book Printing</Link></li>
                                <li><Link href="/services/book-marketing">Book Marketing</Link></li>
                                <li><Link href="/services/author-website">Author Website</Link></li>
                                <li><Link href="/services/amazon-publishing">Amazon Publishing</Link></li>
                                <li><Link href="/services/article-writing-services">Article Writing</Link></li>
                            </ul>
                        </Col>
                        <Col lg="4" sm="6">
                            <h5 className="title">Company</h5>
                            <ul className="footer-links">
                                <li><Link href={"/testimonials"}>Testimonials</Link></li>
                                <li><Link href={"/about-us"}>About Us</Link></li>
                                <li><Link href={"/portfolio"}>Portfolio</Link></li>
                                <li><Link href={"/contact-us"}>Contact Us</Link></li>
                            </ul>
                        </Col>
                    </Row>

                </div>
            </footer>
            <div className="footer-copyright">
                <div className="container">
                    <Row>
                        <Col className="mb-lg-0 mb-2" lg="6">
                            <p>Copyright © 2023 Book Bridge Studio . All Rights Reserved.</p>
                        </Col>
                        <Col className="text-lg-end text-center" lg="6">
                            <Link href={"#"} className="me-2">Privacy Policy</Link>
                            <Link href={"#"}>Terms & Conditions</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer
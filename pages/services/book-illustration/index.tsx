import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React from "react";
import Header from "@/components/Header/Header";
import { Button, Card, Col, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider";
import BannerForm from "@/components/ContactForm/BannerForm";
import LogosSlider from "@/components/Sliders/LogosSlider";
import PortfolioSlider from "@/components/Sliders/PortfolioSlider";
import ModalForm from "@/components/ModalForm";

export default function Home() {

  return (
    <>
      <Head>
        <title>Book Illustration | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">The Illustration must captivate and leave a lasting impression.</span>
                <h2 className="heading">Book Illustration Services at Book Bridge Studio</h2>
                <p className="">We provide the most cost-effective Book illustration services to satisfy your needs.</p>
                <div className="btngroup">
                <ModalForm />
                  <Button variant="outline">Get Started</Button>
                </div>
              </Col>
              <Col lg="6">
                <Card>
                  <Card.Body>
                    <div className="text-center">
                      <h4 className="mheading">Create account</h4>
                    </div>
                    <BannerForm />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="bottomSec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <LogosSlider />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">Book Illustration Services</h2>
                <p>The Book Bridge Studio team is aware of the significance of cover art and illustrations in children&apos;s books, picture books, comic books, graphic novels, interactive eBooks, textbooks, and manuals. The appropriate images and illustrations will convey the information, sentiment, whimsy, and emotional tones that the author wishes to convey. The accomplished Illustrators at Book Bridge Studio work closely with authors to ensure their message, theme, characters, and style shine through. We&apos;ve illustrated books from inception and conceptualized artwork illustrations to complement previous works.</p>
                <p>Whether you need illustrations for your book cover or an entire book or just want your designs converted to digital images, our professional team of book illustrators will create captivating illustrations that will captivate your audience.</p>
              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/c_scale,q_40,w_800/v1698061885/Defiscoquins/book-bridge/portfolio/creative-bok_ew09tg.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <span className="subheading">Exceptional</span>
              <h2 className="mheading">BOOK ILLUSTRATION SERVICES</h2>
              <p>Here are six ways we use to assist you with the finest book illustrations for your book.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Children&apos;s Book Illustrations</h3>
                    <p>Understanding the importance of children&apos;s book illustrations, Book Bridge Studio offers professional illustration services and ghostwriting services. Our team of creators comprises highly skilled and seasoned illustrators who specialize in illustrations that captivate children&apos;s minds.</p>
                  </div>
                  <a href="book-writing.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Textbook Illustration</h3>

                    <p>Book Bridge Studio researches the author&apos;s written content to generate educational, uncluttered prints for both digital and print textbooks. We rely on basic designs, consistent color schemes, and visual storytelling to enhance learning. This includes illustration strategies tailored to the educational subject matter.</p>
                  </div>

                  <a href="proofreading.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Picture Book Illustrations</h3>
                    <p>In addition to traditional and digital illustration techniques, we employ specialized design and drawing software, such as Adobe Creative Cloud and Procreate.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Training Manual Illustration</h3>
                    <p>Book Bridge Studio recognizes that visuals help facilitate comprehension for many individuals. We convert text from training manuals into images, which may be simple or elaborate based on the complexity of the content, the instructions, and the task specifications.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Comic Book Illustrations</h3>
                    <p>Our team is immersed in comic and animation trends in order to create dramatic sketch, ink, color, and inventive caption illustrations that capture the evocative spirit of the genre while stretching artistic boundaries. It contains typography, word balloons, characters, and backgrounds reflecting the digital essence of the evolution of the comic industry.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Book Cover Illustrations</h3>
                    <p>Book Bridge Studio takes a balanced approach to cover illustration design for text, title, and images in order to ensure the layout and typography that attracts readers and effectively communicates key book themes.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section className="cta-sec">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="mheading">Take your book to the next level with our help</h2>
                <p>We&apos;ll turn your thoughts into a carefully crafted and critically acclaimed book</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2 mb-2" href="tel:1230004444">Call Us 123-000-4444</Button>
                  <Button variant="outline" className="me-2 mb-2">Live Chat</Button>
                  <ModalForm />
                </div>
              </Col>
              <Col lg="6" className="d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045636/Defiscoquins/book-bridge/goodbad_mv0ous.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <h2 className="heading">Our Impressive Portfolio</h2>
              <p className="">Our track record speaks volumes. We are committed to offering each client unparalleled value and personalized service.</p>
            </div>
            <PortfolioSlider />
          </div>
        </section>

        <section className="section-padding testimonial bg-grey">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="mheading">What Our Clients Say About Us</h2>
            </div>
            <div className="process">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col md={5}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698056418/Defiscoquins/book-bridge/p-1_ee7k5e.webp" className="img-fluid" alt="img" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698056418/Defiscoquins/book-bridge/p-1_ee7k5e.webp" className="img-fluid" alt="img" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="three">
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698056417/Defiscoquins/book-bridge/p-3_rjy2fy.webp" className="img-fluid" alt="img" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698056417/Defiscoquins/book-bridge/p-4_v1qdsp.webp" className="img-fluid" alt="img" />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                  <Col md={7}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <div className="info">
                            <span>1</span>
                            <div className="content">
                              <h4>Extensive Research, in addition to the Outline Draft</h4>
                              <p>After extensive research, we anticipate perceiving and knowing your needs to produce a well-written plot.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <div className="info">
                            <span>2</span>
                            <div className="content">
                              <h4>True-to-life Content Writing</h4>
                              <p>After you approve our exhaustively researched outline, our storytellers will begin writing your concept&apos;s first draft immediately.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="three">
                          <div className="info">
                            <span>3</span>
                            <div className="content">
                              <h4>Careful evaluation, Editing, and Proofreading</h4>
                              <p>To enhance our writing process, we continue to undergo multiple rounds of draft refining, editing, and proofreading to deliver the best.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          <div className="info">
                            <span>4</span>
                            <div className="content">
                              <h4>Essential formatting, Design, and Typesetting</h4>
                              <p>When the first manuscript has been completed, proofread, and approved by you, we look forward to formatting it extensively.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </section>
        <section className="section-padding bg-grey-grad">
          <div className="container">
            <div>
              <Row>
                <Col lg="6" className="mb-lg-0 mb-3 align-self-center pe-lg-4">
                  <h2 className="mheading">Send Us a Message</h2>
                  <p>Please fill out your details, and our team will contact you soon.</p>
                  <ContactForm />

                </Col>
                <Col lg="6" className="ps-lg-4 d-lg-block d-none">
                  <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045637/Defiscoquins/book-bridge/rectangle-11-2_d4kmap.webp" className="img-fluid" alt="contactimg" />
                </Col>
              </Row>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

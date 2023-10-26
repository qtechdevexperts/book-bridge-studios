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
import ModalForm from "@/components/ModalForm/ModalForm";

export default function Home() {

  return (
    <>
      <Head>
        <title>Book Printing | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">Hassle-Free, Quick, and Affordable</span>
                <h2 className="heading">Your Source for Book Printing and Delivery Services of the Highest Quality.</h2>
                <p className="">Book Bridge Studio understands both the expectations of authors and readers, having completed hundreds of book printing projects last year. Whether you require 100 or 10,000 copies, Book Bridge Studio has your back!</p>
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
                <h2 className="heading">Written, Formatted, And Designed, Your Book Is Complete. Next Steps?</h2>
                <p>Once a book has been completed, the next stage is its publication and printing. We assist in making your book a cherished heirloom and relieve you of the trouble of locating a printer. Our book printing and shipping services are unfailingly individualized, immutable, and practical. In our master-certified in-house printing business, Book Bridge Studio is committed to producing books of the highest quality.
                  Every book we print in our facility satisfies the stringent requirements of digital printing, whether offset printing, print-on-demand, or short-run printing. Our printing press handles your books with extreme care and finesse.</p>
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
              <span className="subheading">Our Process</span>
              <h2 className="mheading">Standard and Individualized Method</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Widespread Printing Expertise</h3>
                    <p>With Book Bridge Studio, nothing is impossible. Our book printing team is familiar with your industry&apos;s standards. Regardless of the genre to which your book pertains, we print it according to the high standards of your genre.</p>
                  </div>
                  <a href="book-writing.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Personalized Service</h3>

                    <p>Based on your specific needs and genre, our team of printing experts devises a foolproof strategy. We listen attentively to your instructions, design a plan, and meet the KPIs within the promised timeframe.</p>
                  </div>

                  <a href="proofreading.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Client Satisfaction</h3>
                    <p>No two clients or initiatives are alike for us. We provide a customized service, and as a result, we place a premium on effective client communication to guide you through each stage of the procedure. We uphold our word and guarantee complete client satisfaction.</p>
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
                <h2 className="mheading">Take Your Book to New Heights</h2>
                <p>Take Your Book to New Heights Give our remarkable eBook writers a chance to prove to bring your ideas to life through meticulous writing and publication. Elevate your book to the next level with our dedicated services.</p>
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
              <h2 className="heading">Explore Our Impressive Portfolio</h2>
              <p className="">Our portfolio showcases the excellence and expertise we bring to every project. We at Book Bridge Studio are committed to providing you with exceptional value and a personalized experience.</p>
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
                              <h4>Research and Outline for the First Draft</h4>
                              <p>Before diving into the manuscript, we fully understand your ideas, instructions, and requirements. Through thorough research, we develop a comprehensive outline and a tentative table of contents for your review.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <div className="info">
                            <span>2</span>
                            <div className="content">
                              <h4>Writing</h4>
                              <p>Once the outline and table of contents are approved, our dedicated writing team begins crafting the manuscript, sharing drafts with you, chapter by chapter. We offer unlimited revisions throughout the writing process to ensure your complete satisfaction.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="three">
                          <div className="info">
                            <span>3</span>
                            <div className="content">
                              <h4>Critical Review, Editing, and Proofreading</h4>
                              <p>Each draft undergoes rigorous editing and proofreading. Upon completion of the writing process, our editors conduct a thorough assessment, ensuring the manuscript is refined and error-free before finalization.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          <div className="info">
                            <span>4</span>
                            <div className="content">
                              <h4> Formatting, Typesetting, and Design</h4>
                              <p>Once your manuscript is finalized and receives your approval, we expertly format the book, perform meticulous typesetting to meet international publishing standards and design a cover that aligns with your preferences.</p>
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

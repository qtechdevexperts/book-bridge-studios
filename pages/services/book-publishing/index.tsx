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
        <title>Book Publishing | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">Publication of Your Stories Globally</span>
                <h2 className="heading">Introduce Your Book to the World Using Our Premier Book Publishing Service</h2>
                <p className="">Your masterpiece is now available for everyone to read. However, you have no idea how to publish it. We have you covered. Book Bridge Studio helps your work reach its intended audience with utmost passion and dedication. Our team of professionals and experts can help you publish the book quickly and easily.</p>
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
                <h2 className="heading">The easiest and quickest publishing process</h2>
                <p>At Book Bridge Studio, we utilize seasoned book publishers who have distinguished themselves in every field of book writing or publishing. Regardless of the genre or format, we have mastered each. Our procedure is organized, legal, and efficient. We have effectively transformed hundreds of aspiring writers from around the globe into published authors with award-winning credentials thanks to the excellence and expertise of our team.</p>
              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698063335/Defiscoquins/book-bridge/portfolio/bookps_nfrp0q.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Our Effortless Approach</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Widespread Publishing Expertise</h3>
                    <p>With Book Bridge Studio, nothing is impossible. Our publishing team is familiar with your industry&apos;s standards. Regardless of the genre to which your book pertains, we publish it according to the high standards of your genre.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Personalized Service</h3>

                    <p>Based on your specific needs and genre, our team of publishing professionals devises a foolproof strategy. We listen attentively to your instructions, design a plan, and meet the KPIs within the promised timeframe.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Client Satisfaction</h3>
                    <p>No two clients or initiatives are alike for us. We provide a customized service, and as a result, we place a premium on effective client communication to guide you through each stage of the procedure. We uphold our word and guarantee complete client satisfaction.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section className="cta-sec">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="mheading">Want To Speak To A Professional About Publishing A Book?</h2>
                <p>We Take Pride In The Quality Of Service That We Offer And Make Sure To Gain Your Trust For A Lifetime.</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2" href="tel:3236140274">Call Us (323) 614-0274</Button>
                  <Button variant="outline" className="me-2">Live Chat</Button>
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
              <h2 className="heading">Our Recent Portfolio</h2>
              <p className="">Our work speaks for itself. We believe in offering the best value and most personalised service to you.</p>
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

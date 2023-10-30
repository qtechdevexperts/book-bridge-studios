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
        <title>Proofreading | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">We Make Your Last Drafts Perfect</span>
                <h2 className="heading">Our editors and proofreaders examine your written materials with a keen eye.</h2>
                <p className="">Book Bridge Studio have linguistic professionals who proofread and edit your book and point out grammatical errors, structural mistakes, verb issues and more to help you improve your handwritten masterpiece</p>
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
                <h2 className="heading">Perfecting Your Books With Unparalleled Editing And Proofreading Services.</h2>
                <p>Whether you are an internationally acclaimed author or a newbie, you need a fresh pair of eyes to go through your best work. At Book Bridge Studio our team of proofreaders make sure that the written copies of your dreams are error-free and grammatically correct. We house industry&apos;s best, most versatile experts who analyse and rid your work of art from any possible mistakes that there may be.</p>
              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/c_scale,q_50,w_800/v1698061692/Defiscoquins/book-bridge/portfolio/proof-read_vz6hsf.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Our Approach Is Client-Centric And Bespoke</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Widespread Expertise</h3>
                    <p>With Book Bridge Studio the sky is your limit. Our experienced team of bookmarketeers has writers specialised in multiple genres. Whether it&apos;s an autobiography, a piece of fiction, or a well-researched business publication – we ensure exceptional quality and unparalleled service.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Personalized Service Tailored to Your Needs</h3>

                    <p>Based on your unique requirements and genre, we assign an expert to your project. We patiently listen to your instructions, formulate a schematic outline, and complete it within the estimated time promised.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Client Communication</h3>
                    <p>For us, no two clients and projects are alike. We offer a bespoke service and henceforth, we keep a particular emphasis on effective client communication to walk you through every step of the process. We stay true to our word and offer 100% client satisfaction.</p>
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
                <h2 className="mheading">Take your book to the next level with our help</h2>
                <p>We&apos;ll turn your thoughts into a carefully crafted and critically acclaimed book</p>
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
              <h2 className="mheading">Our Process</h2>
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
                              <h4>Draft Submission</h4>
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
                              <h4>Thorough Editing And Proofreading</h4>
                              <p>We assign a dedicated copyeditor to every project whose job is to churn coffee
                                        and thoroughly read and review the client submitted drafts with a keen eye for
                                        mistakes</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="three">
                          <div className="info">
                            <span>3</span>
                            <div className="content">
                              <h4>Perfecting Each And Every Sentence</h4>
                              <p>Our proofreaders have an eye for teeny-tiny mistakes and are obsessed with
                                        correcting them at full-blown perfectionism. We fix all typos and errors and
                                        peruses the manuscript one more time to make sure there is no lacking remained
                                        in the final draft.</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          <div className="info">
                            <span>4</span>
                            <div className="content">
                              <h4>Software Scanning</h4>
                              <p>The human-edited draft is run on standard digital writing software such as
                                        Grammarly, Copyscape, and Hemingway for 100% error-free results.</p>
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

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

export default function Home() {

  return (
    <>
      <Head>
        <title>Book Writing | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">Have a story to tell?</span>
                <h2 className="heading">Tailored Book Writing Services for Every Genre and Niche</h2>
                <p className="">At Book Bridge Studio, we take your ideas, experiences, and expertise and transform them into captivating words that deeply resonate with both you and your target audience. Our team of highly skilled and creative writers not only excel in a diverse array of genres and niches but also bring a delightful and collaborative approach to every project.</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2">Get A Quote</Button>
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
                <h2 className="heading">Connect with Genre and Niche-Specific Book Writing Pros</h2>
                <p>Achieving the dream of publishing a book under your name is a shared aspiration. However, only some aspiring writers have the time or the creative drive to produce a high-quality and marketable book. That&apos;s where our ghostwriting expertise comes in. We assist you in bringing your book idea to life by actively listening to your vision, developing a structured framework, and skillfully transforming your thoughts into a captivating book. At Book Bridge Studio, we are dedicated to aligning our goals with yours, empowering you to express yourself through the written word.</p>
              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/q_50/v1698051658/Defiscoquins/book-bridge/book-writng-sr_dhngo3.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">A Client-Centric and Customized Approach</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Extensive Expertise Across Various Genres and Niches</h3>
                    <p>At Book Bridge Studio, we transcend boundaries. Our team of experienced writers specializes in a wide range of genres and niches. Whether it&apos;s an autobiography, fiction, or a meticulously researched business publication, we guarantee exceptional quality and unparalleled service.</p>
                  </div>
                  <a href="book-writing.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Personalized Service Tailored to Your Needs</h3>

                    <p>We understand that every book project is unique. That&apos;s why we assign a dedicated team of writers specifically chosen to match your genre and niche requirements. We attentively listen to your instructions, carefully craft an outline, and meticulously develop your manuscript into a complete book within the agreed-upon timeframe.</p>
                  </div>

                  <a href="proofreading.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Effective Client Communication for Complete Satisfaction</h3>
                    <p>At Book Bridge Studio, we recognize that all clients and projects are unique. Our bespoke approach places a strong emphasis on clear and transparent communication. We guide and assist you through each step of the book-writing process, ensuring that your vision is faithfully brought to life. Our commitment to delivering on our promises guarantees your utmost satisfaction.</p>
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
                  <Button variant="black" className="mb-2">Get A Quote</Button>
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

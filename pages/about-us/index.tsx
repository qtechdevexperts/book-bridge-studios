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
        <title>About us | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">WHY CHOOSE US</span>
                <h2 className="heading">About Us</h2>

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
              <Col lg="6" className="mb-lg-0 mb-3 align-self-center">
                <h2 className="heading">We&apos;re Meticulously Sculpting Your Book Writing Journey</h2>
                <p>Book Bridge Studio is a leading support for storytellers. Whether it is your autobiography, a work of fiction, or a work of history, we bring your vision to life in the form of a meticulously written and published book.</p>
                <p>We have a team of highly experienced bookworms who are experts in their respective disciplines. We delivered thousands of successful, meticulously written, designed, edited, and published publications. In addition, many of our clients have become best-selling authors as a result of our excellence.</p>

              </Col>
              <Col lg="6" className="ms-auto d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045638/Defiscoquins/book-bridge/rectangle-10-1_ghvx18.webp" className="img-fluid aboutimg" alt="img" />
              </Col>
            </Row>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">

            <Row className="justify-content-center">
              <Col lg="4" className="mb-3">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698072417/Defiscoquins/book-bridge/researching_ea4cqy.svg" className="img-fluid mb-3" alt="img" />
                <p>We Do Research & Outline the Draft After extensive research and understanding of your concept and specifications, we will craft a well-conceived plot.</p>
              </Col>

              <Col lg="4" className="mb-3">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698072414/Defiscoquins/book-bridge/genuine_dkfbmw.svg" className="img-fluid mb-3" alt="img" />
                <p>Writing Unique Content Based on Your Story or Idea Once you approve the narrative outline, our writers will begin composing a unique and original first draft based on your concept.</p>
              </Col>

              <Col lg="4" className="mb-3">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698072412/Defiscoquins/book-bridge/critical_awanyj.svg" className="img-fluid mb-3" alt="img" />
                <p>Evaluation, Editing, And Proofreading We continue to edit and revise the manuscript simultaneously throughout the entire writing process. After completion, our editors perform thorough proofreading.</p>
              </Col>

              <Col lg="4" className="mb-3">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698072412/Defiscoquins/book-bridge/formatting_odtnzu.svg" className="img-fluid mb-3" alt="img" />
                <p>Extensive Formatting, Typesetting, And Designing Once you have written, edited, proofread, and approved the manuscript, we start formatting thoroughly for publication.</p>
              </Col>
              <Col lg="4" className="mb-3">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698072418/Defiscoquins/book-bridge/branding_xzinfi.svg" className="img-fluid mb-3" alt="img" />
                <p>Publishing, Branding, Promotions, And Marketing After finalizing your book, we will publish it on the platform of your choice and promote it with an excellent book marketing approach.</p>
              </Col>

            </Row>
          </div>
        </section>
        <section className="listsec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slutin">
                  <h2 className="heading">Putting You Take the Controls.</h2>
                  <p>When you choose our book services, you have complete control over every detail. The decision is entirely yours, from editorial modifications to formatting to deciding the RRP! Our writers are enthusiastic, self-motivated, and capable of producing gorgeous literary works applicable to a vast array of niches, disciplines, and industries.</p>
                  <p>We are proud of our adaptability as we serve the following disciplines, specialties, and industries:</p>
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <div className="wrap">
                  <ul>
                    <li className="bb br">
                      <p>General Nonfiction</p>
                    </li>
                    <li className="bb br">
                      <p>Narrative Nonfiction</p>
                    </li>
                    <li className="bb">
                      <p>Biography</p>
                    </li>
                    <li className="bb  br">
                      <p>Autobiography</p>
                    </li>
                    <li className="bb br">
                      <p>Essays</p>
                    </li>
                    <li className="bb">
                      <p>Speech</p>
                    </li>
                    <li className="bb br">
                      <p>Drama</p>
                    </li>
                    <li className="bb br">
                      <p>Poetry</p>
                    </li>
                    <li className="bb br">
                      <p>Children’s Story</p>
                    </li>
                    <li className="bb br">
                      <p>Short Story</p>
                    </li>
                    <li className="bb br">
                      <p>Fantasy</p>
                    </li>
                    <li className="bb br">
                      <p>Humour</p>
                    </li>
                    <li className="bb br">
                      <p>Fable</p>
                    </li>
                    <li className="bb br">
                      <p>Fairy Tale</p>
                    </li>

                    <li className="bb br">
                      <p>Tall Tale</p>
                    </li>
                    <li className="bb br">
                      <p>Science Fiction</p>
                    </li>

                    <li className="bb br">
                      <p>Realistic Fiction</p>
                    </li>
                    <li className="bb br">
                      <p>Folklore</p>
                    </li>
                    <li className="bb br">
                      <p>Historical Fiction</p>
                    </li>
                    <li className="bb br">
                      <p>Horror</p>
                    </li>
                    <li className="bb br">
                      <p>Legend</p>
                    </li>
                    <li className="br">
                      <p>Mystery</p>
                    </li>
                    <li className="br">
                      <p>Mythology</p>
                    </li>
                  </ul>
                  <h6>Do you want to get Genre-specific Book Services?</h6>
                  <span>Give us a call <a href="tel:+18885311665">Toll Free (888) 531-1665</a>
                  </span>
                </div>
              </div>
            </div>
          </div >
        </section >

        <section className="cta-sec">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="mheading">Need To Do a Book Discussion with an Expert?</h2>
                <p>We want to earn your lifelong trust by the superior quality of our service.</p>
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
      </div >
    </>
  );
}

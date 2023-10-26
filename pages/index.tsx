import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React from "react";
import Slider from "react-slick";
import Header from "@/components/Header/Header";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider";
import LogosSlider from "@/components/Sliders/LogosSlider";
import ModalForm from "@/components/ModalForm/ModalForm";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <Head>
        <title>Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="hero-section">
          <div className="container">
            <Row>
              <Col lg="6">
                <span className="subheading">Self Publishing Company</span>
                <h2 className="heading">Let&apos;s Get Amazon Publishing Services!</h2>
                <p className="">Don&apos;t make your manuscript wait – get Kindle self publishing with Book Bridge Studio – It&apos;s easy and ROI-positive.</p>
                <div className="btngroup">
                  <ModalForm />
                  <Button variant="outline">Get Started</Button>
                </div>
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
        <section className="form-sec">
          <div className="container">
            <div className="row">
              <div className="form-txt">
                <h4 className="text-center text-white">Sign up Now with Book Bridge Studio to Get Our Limited Time Offer</h4>
              </div>
              {/* <!-- btn form-btn --> */}
              <form method="POST" className="form-get-quote form_submission">
                <input type="hidden" name="url" value="index.html" />
                <input type="hidden" name="domain" value="https://bookbridgestudio.thesuitchstaging.com/" />
                <input type="hidden" name="subject" value="Banner Form (https://bookbridgestudio.thesuitchstaging.com/)" />
                <input type="hidden" name="msg" />

                <div className="form-div">
                  <div className="col-lg">
                    <input name="cn" required className="form-control" type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg">
                    <input name="em" required className="form-control" type="email" placeholder="Email" />
                  </div>
                  <div className="col-lg">
                    <input name="pn" required className="form-control phoneNum" type="text" placeholder="Phone" />
                  </div>
                  <div className="col-lg">
                    <select className="classic form-select" name="service" data-name="service">
                      <optgroup label="&nbsp; Select Services">
                        <option value="Book Writing " data-amt="16" data-deadline="1">Book Writing
                        </option>
                        <option value="Book Marketing " data-amt="16" data-deadline="1">Book Marketing
                        </option>
                        <option value="Book Cover Design" data-amt="50" data-deadline="1">Book Cover
                          Design </option>
                        <option value="Book Proof Reading & Editing" data-amt="50" data-deadline="1">
                          Book Proof Reading & Editing</option>
                        <option value="Book Publishing" data-amt="50" data-deadline="1">Book Publishing
                        </option>
                        <option value="E-Book Writing & Publishing" data-amt="50" data-deadline="1">
                          E-Book Writing & Publishing</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="col-lg bnr-form-btn">
                    <input type="submit" name="submit" className="btn btn-white w-100" value="Submit" />
                  </div>

                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="mb-lg-0 mb-3 align-self-center">
                <h2 className="heading">Amazon Publishing Services Tailored To Your Desired Needs.</h2>
                <p>We&apos;re here to assist you in the best possible manner. We provide entire book writing, editing, book marketing, and Amazon publishing services:</p>
                <ul className="listcol">
                  <li>Book Ghostwriting Services</li>
                  <li>Book Cover Design</li>
                  <li>Editing and Formatting</li>
                  <li>E-book Writing Services</li>
                  <li>Book Publishing Services</li>
                  <li>Book Marketing Services</li>
                  <li>Author Website Design</li>
                </ul>
                <div className="btngroup">
                <ModalForm />
                  <Button variant="outline">Live Chat</Button>
                </div>
              </Col>
              <Col lg="6" className="ms-auto d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045638/Defiscoquins/book-bridge/rectangle-10-1_ghvx18.webp" className="img-fluid aboutimg" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Book Bridge Studio Premium Book Services</h2>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p>Book Bridge Studio provides top quality, custom-tailored solutions for all your Book Writing, Editing, Publishing and Marketing needs.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Book Writing</h3>
                    <p>We are not all gifted writers cut out to write novels and books.
                      Some of us are short on time, some lack the motivation to translate thoughts into
                      writing while others don&apos;t even know where to begin. This is where our ghostwriting
                      skillset comes into play. Our genre and niche-specific writers are seasoned
                      champions who have a habit of producing meticulously written books.</p>
                  </div>
                  <a href="book-writing.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Book Editing</h3>

                    <p>Whether you are an internationally acclaimed author or a newbie,
                      you need a fresh pair of eyes to go through your manuscript. At ABook Bridge Studio,
                      our team of editors ensure your manuscript is completley error-free, grammatically
                      correct and of a publishable quality. We house genre and niche-specific experts who
                      critically assess your work, identify areas of improvement and provide constructive
                      feedback.</p>
                  </div>

                  <a href="proofreading.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Book Publishing</h3>
                    <p>A well-published book is critical to your success as an author.
                      Even though you worked hard on the manuscript, your book may not get the attention
                      it deserves without proper publishing. Book Bridge Studio will help you provide
                      the
                      best possible reading experience for your book’s target audience. </p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Book Marketing</h3>
                    <p>We help you take your book from the back shelves to the
                      bestselling title by marketing it the right way. From SEO to Social Media Marketing,
                      from Website design and development to paid marketing, our digitally Ny marketers
                      make sure that your book never leaves the sight of its target audience. At Book
                      Marketing Pros, we develop a secret recipe to get your book recognised as we empower
                      you through our ROI-focused marketing techniques and drive traction to your book.
                    </p>
                  </div>
                  <a href="book-marketing.html" className="read-txt">Read More</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="cta-sec">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="mheading">Work With a Fantastic Group of Book Bridge Studio</h2>
                <p>Discover the amazing world of books with Book Bridge Studio! Get closer to having your book published on Amazon through Kindle Direct Publishing.</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2" href="tel:1230004444">Call Us 123-000-4444</Button>
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
            <Row>
              <Col lg="6" className="ms-auto d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045697/Defiscoquins/book-bridge/rectangle-11-1_r7jbx6.webp" className="img-fluid aboutimgleft" alt="img" />
              </Col>
              <Col lg="6" className="mb-lg-0 mb-3 align-self-center">
                <h2 className="heading">Are You Still Waiting for Publication of Your Book?</h2>
                <p>Feel free to rely on us. Here at Book Bridge Studio, we provide comprehensive services for authors and publishers. Our services include:</p>
                <ul className="">
                  <li>E-book publication</li>
                  <li>Branding and publicity</li>
                  <li>Video book trailers</li>
                  <li>Web and Internet SEO</li>
                  <li>Audiobooks</li>
                  <li>Custom illustrations</li>
                </ul>
                <div className="btngroup">
                <ModalForm />
                  <Button variant="outline">Live Chat</Button>
                </div>
              </Col>

            </Row>
          </div>
        </section>

        <section className="section-padding testimonial bg-grey">
          <div className="container">
            <div className="text-center mb-lg-0 mb-3">
              <h2 className="mheading">What Our Clients Say About Us</h2>
            </div>
            <TestimonialSlider />
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

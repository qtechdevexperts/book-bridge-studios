import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header/Header";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import bannImg from "@/public/images/rectangle76.png"
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import testi1 from "@/public/images/testimonials-alli.png"
import testi2 from "@/public/images/talishabrantley.png"

export default function Reviews() {

  return (
    <>
      <Head>
        <title>Testimonials</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <span className="subheading">What Our Clients Say</span>
                <h2 className="heading">Testimonials</h2>

              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <Row className="">
              <Col lg="6">
                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi2} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Talisha Brantley</h6>
                        <p className="designation">VP of Events Bitwise</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi1} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Ally Masi</h6>
                        <p className="designation">Director of 1toFour</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi1} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Ally Masi</h6>
                        <p className="designation">Director of 1toFour</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi2} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Talisha Brantley</h6>
                        <p className="designation">VP of Events Bitwise</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>





              </Col>
              <Col lg="6">
                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi1} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Ally Masi</h6>
                        <p className="designation">Director of 1toFour</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi2} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Talisha Brantley</h6>
                        <p className="designation">VP of Events Bitwise</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi2} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Talisha Brantley</h6>
                        <p className="designation">VP of Events Bitwise</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                    <div className="profile">
                      <Image src={testi1} className="img-fluid" alt="img" />
                      <div>
                        <h6 className="name">Ally Masi</h6>
                        <p className="designation">Director of 1toFour</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

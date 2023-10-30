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
import testimonial1 from "@/public/images/testi-1.png"
import testimonial2 from "@/public/images/testi-2.png"
import testimonial3 from "@/public/images/testi-3.png"
import testimonial4 from "@/public/images/testi-4.png"
import testimonial5 from "@/public/images/testi-5.png"
import testimonial6 from "@/public/images/testi-6.png"

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
                    <div className="profile">
                      <Image src={testimonial2} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Rita Thompson</h6>
                      </div>
                    </div>
                    <p>I had a remarkable experience with Book Bridge Studio for their Editing and Publishing services. As an author, I entrusted them with my manuscript, and I was thoroughly impressed with the level of professionalism and attention to detail they exhibited. The editing process was seamless, with their team providing valuable insights and suggestions that significantly enhanced the quality of my book. The publishing phase was equally impressive, as they guided me through the necessary steps and ensured a smooth and efficient publication. I am grateful for the exceptional services provided by Book Bridge Studio, and I highly recommend them to any author in need of top-notch editing and publishing assistance.</p>
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
                    <div className="profile">
                      <Image src={testimonial3} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Sean Maze</h6>
                      </div>
                    </div>
                    <p>I am thrilled with the Amazon marketing services provided by Book Bridge Studio. Their expertise in navigating the Amazon platform has been instrumental in boosting the visibility and sales of my book. With their strategic marketing approach, my book has gained significant exposure to a wider audience, resulting in increased sales and positive reader feedback. The team at Book Bridge Stusio has been responsive, proactive, and dedicated to maximizing the marketing potential of my book on Amazon. I am grateful for their efforts and highly recommend their Amazon marketing services to any author looking to effectively promote their work on the world&apos;s largest online marketplace.</p>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <div className="profile">
                      <Image src={testimonial4} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Dr. J.K Hudson</h6>
                      </div>
                    </div>
                    <p>Choosing Kindle Vella through Book Bridge Studio for publishing my work has been a remarkable decision. The platform&apos;s user-friendly interface, coupled with its vast reader base, has allowed my stories to captivate a wide audience. The serialized format of Kindle Vella has not only increased reader engagement but also opened doors to new opportunities for my writing career. With Kindle Vella, I have found a supportive community of readers and fellow authors, and the seamless publishing process has given me complete control over my work. I highly recommend Kindle Vella to any author looking to embark on an exciting and rewarding publishing journey.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="border mb-3">
                  <Card.Body>
                    <div className="profile">
                      <Image src={testi1} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Catherine D. Netter</h6>
                      </div>
                    </div>
                    <p>Book Bridge Studio ghostwriting and publishing services have been an absolute game-changer for me as an author. From the impeccable professionalism of their ghostwriters to the seamless publishing process, every step was a delight. They brought my vision to life with precision and skill, and their user-friendly platform made publishing effortless. Thanks to Book Bridge Studios, I now have a beautifully published book that has reached readers worldwide. I highly recommend their services to any author looking for a hassle-free path to success.</p>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <div className="profile">
                      <Image src={testi2} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Martie Smith</h6>
                      </div>
                    </div>
                    <p>I cannot praise Book Bridge Studio enough for their exceptional book illustration, cover design, and marketing services. Their team of talented artists and designers transformed my book into a visual masterpiece, capturing the essence of my story with stunning illustrations and an eye-catching cover. The marketing strategies they implemented propelled my book to new heights, reaching a wide audience and generating significant sales. Thanks to Book Bridge Studio, my book now stands out from the crowd, and I am beyond satisfied with the results. If you&apos;re an author seeking professional illustrations, captivating cover design, and effective marketing, look no further than Book Bridge they are the key to bringing your book to life and maximizing its success.</p>
                  </Card.Body>
                </Card>

                <Card className="border mb-3">
                  <Card.Body>
                    <div className="profile">
                      <Image src={testimonial1} className="img-fluid" alt="img" />
                      <div>
                        <p className="designation">Sincerely,</p>
                        <h6 className="name">Avirul Islam</h6>
                      </div>
                    </div>
                    <p>I am extremely pleased with the publishing services provided by Book Bridge Studio for my book, from start to finish, their team demonstrated professionalism, expertise, and a genuine commitment to bringing my vision to life. They guided me through the entire publishing process, offering valuable insights and suggestions along the way. The final product surpassed my expectations, with a beautifully designed cover and impeccable formatting. The team&apos;s attention to detail and dedication to delivering a high-quality book is evident in every aspect. I am grateful to Book Bridge Studio for their outstanding publishing services and would highly recommend them to any author seeking a seamless and successful publishing journey.</p>
                  </Card.Body>
                </Card>

                {/* <Card className="border mb-3">
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
                </Card> */}
              </Col>
            </Row>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

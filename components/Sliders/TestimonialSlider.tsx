import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import testi1 from "@/public/images/testimonials-alli.png"
import testi2 from "@/public/images/talishabrantley.png"
function TestimonialSlider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerPadding: '60px',
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };
    return (
        <>
            <Row className="testi-slider">
                <Slider {...settings}>
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <div className="profile">
                                    <Image src={testi1} className="img-fluid" alt="img" />
                                    <div>
                                        <h6 className="name">Ally Masi</h6>
                                        <p className="designation">Director of 1toFour</p>
                                    </div>
                                </div>
                                <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <div className="profile">
                                    <Image src={testi2} className="img-fluid" alt="img" />
                                    <div>
                                        <h6 className="name">Talisha Brantley</h6>
                                        <p className="designation">VP of Events Bitwise</p>
                                    </div>
                                </div>
                                <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <div className="profile">
                                    <Image src={testi1} className="img-fluid" alt="img" />
                                    <div>
                                        <h6 className="name">Ally Masi</h6>
                                        <p className="designation">Director of 1toFour</p>
                                    </div>
                                </div>
                                <p>&ldquo;We chose Welcome because it&apos;s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&ldquo;</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <div className="profile">
                                    <Image src={testi2} className="img-fluid" alt="img" />
                                    <div>
                                        <h6 className="name">Talisha Brantley</h6>
                                        <p className="designation">VP of Events Bitwise</p>
                                    </div>
                                </div>
                                <p>&ldquo;Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.&ldquo;</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Slider>
            </Row>
        </>
    );
}

export default TestimonialSlider;
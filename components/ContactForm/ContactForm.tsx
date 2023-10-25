import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

function ContactForm() {
    return (
        <>
            <Form className="contact-form">
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <Row>
                    <Col lg="6">
                        <FloatingLabel controlId="floatingInputGrid" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col lg="6">
                        <FloatingLabel controlId="floatingInputPhone" label="Phone" className="mb-3">
                            <Form.Control type="number" placeholder="Phone" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <FloatingLabel controlId="floatingSelect" label="Book Writing" className="mb-3">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </FloatingLabel>
                <Button variant="black">Submit</Button>
            </Form>
        </>
    );
}

export default ContactForm;
import { useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

function ModalForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="black" className="me-2" onClick={handleShow}>
                Get A Quote
            </Button>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Form className="contact-form mt-0 p-3">
                    <Modal.Header closeButton>
                        <Modal.Title>Activate this offer to avail Exclusive Discounts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2 className="pb-3">LAST 3 COUPONS LEFT</h2>
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
                                <option>Select Service</option>
                                <option value="1">Book Writing</option>
                                <option value="2">Book Marketing</option>
                                <option value="3">Book Cover Design</option>
                                <option value="3">Book Proof Reading & Editing</option>
                                <option value="3">Book Publishing</option>
                                <option value="3">E-Book Writing & Publishing</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="w-100" variant="black">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </>
    );
}

export default ModalForm;
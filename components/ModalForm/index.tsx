import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import nodemailer from "nodemailer";

interface FormData {
  email: string;
  name: string;
  contact: string;
  service: string;
  message: string;
}

export default function ModalForm() {
  const [mailStatus, setMailStatus] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState<FormData>({
    email: "",
    name: "",
    contact: "",
    service: "",
    message: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="black" className="me-2" onClick={handleShow}>
        Get A Quote
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form className="contact-form mt-0 p-3" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              Activate this offer to avail Exclusive Discounts
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className="pb-3">LAST 3 COUPONS LEFT</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <Row>
              <Col lg="6">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
              <Col lg="6">
                <FloatingLabel
                  controlId="floatingInputPhone"
                  label="Phone"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="contact"
                    placeholder="Phone"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingSelect"
              label="Book Writing"
              className="mb-3"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="service"
                onChange={handleSelectChange}
              >
                <option>Select Service</option>
                <option value="Book Writing">Book Writing</option>
                <option value="Book Marketing">Book Marketing</option>
                <option value="Book Cover Design">Book Cover Design</option>
                <option value="Book Proof Reading & Editing">
                  Book Proof Reading & Editing
                </option>
                <option value="Book Publishing">Book Publishing</option>
                <option value="E-Book Writing & Publishing">
                  E-Book Writing & Publishing
                </option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Message"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={handleTextAreaChange}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button className="w-100" type="submit" variant="black">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

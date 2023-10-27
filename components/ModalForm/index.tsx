import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import nodemailer from "nodemailer";
import axios from "axios";
import GlobalContactForm from "../GlobalContactForm";


export default function ModalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <div className={`contact-form mt-0 p-3`} >
          <Modal.Header closeButton>
            <Modal.Title>
              Activate this offer to avail Exclusive Discounts
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className="pb-3">LAST 3 COUPONS LEFT</h2>
            <GlobalContactForm />
          </Modal.Body>
        </div>
      </Modal >
    </>
  );
}

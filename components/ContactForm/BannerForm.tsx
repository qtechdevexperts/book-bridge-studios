import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function BannerForm() {
    return (
        <>
            <Form className="contact-form">
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputPhone" label="Phone" className="mb-3">
                    <Form.Control type="number" placeholder="Phone" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Services" className="mb-3">
                    <Form.Select aria-label="Floating label select example">
                        <option value="">Services</option>
                        <option value="Book Writing">Book Writing </option>
                        <option value=" E-book Writing &amp; Publishing"> E-book Writing &amp; Publishing</option>
                        <option value="Book Editing &amp; Proofreading">Book Editing &amp; Proofreading</option>
                        <option value=" Book Cover Design"> Book Cover Design </option>
                        <option value="  Book Illustrations">Book Illustrations  </option>
                        <option value="  Book Publishing ">Book Publishing  </option>
                        <option value="Book Printing">Book Printing </option>
                        <option value="Book Marketing">Book Marketing</option>
                        <option value="Author Website">Author Website</option>
                        <option value=" Amazon Publishing ">Amazon Publishing </option>
                    </Form.Select>
                </FloatingLabel>
                <Button variant="black" className="w-100">Submit</Button>
            </Form>
        </>
    );
}
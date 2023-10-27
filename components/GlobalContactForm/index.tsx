import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

interface FormData {
  email: string;
  name: string;
  phone: string;
  service: string;
  message: string;
}
export default function GlobalContactForm() {
  const router = useRouter();
  const [mailStatus, setMailStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    success: false,
    error: false,
    message: "",
  });
  const [data, setData] = useState<FormData>({
    email: "",
    name: "",
    phone: "",
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

    if (data.service === "") {
      setResult({
        error: true,
        success: false,
        message: "Please select a service",
      });
    } else {
      try {
        setLoading(true);
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://api.bookbridgestudio.com:5000/api/v1/sendEmail",
          headers: {
            "Content-Type": "application/json",
          },
          data: { ...data, subject: "Response Confirmation Email" },
        };

        axios
          .request(config)
          .then((response) => {
            if (response.data.data) {
              // SET SUCCESS MESSAGE
              setResult({
                error: false,
                success: true,
                message: "Form submitted successfully",
              });
              setTimeout(() => {
                router.refresh();
              }, 1000);
            } else {
              // SET ERROR MESSAGE
              setResult({
                error: true,
                success: false,
                message: "Something went wrong! Please try again.",
              });
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setResult({
              error: true,
              success: false,
              message: "Something went wrong! Please try again.",
            });
          });
      } catch (error) {
        setLoading(false);
        setResult({
          error: true,
          success: false,
          message: "Something went wrong! Please try again.",
        });
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="name@example.com"
            onChange={handleInputChange}
            required
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
                required
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
                name="phone"
                placeholder="Phone"
                onChange={handleInputChange}
                required
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
            <option value="">Select Service</option>
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
            required
          />
        </FloatingLabel>
        <div className="mt-4">
          {loading && (
            <div className="text-center d-block w-100">
              <div
                className="spinner-border text-dark text-center"
                role="status"
              ></div>
            </div>
          )}
          <p
            className={`text-center d-block w-100 ${
              result.error ? "text-danger" : ""
            } ${result.success ? "text-success" : ""} `}
          >
            {result.message}
          </p>
          <Button
            className="w-100"
            type="submit"
            variant="black"
            disabled={loading ? true : false}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

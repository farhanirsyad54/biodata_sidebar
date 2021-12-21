import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Style";
import { Col, Row, Button, Form } from "react-bootstrap";
import Kartu from "./Kartu";

export default function Formulir() {
  const classes = useStyles();

  const form = {
    nama: "",
    job: "",
    phone: "",
    email: "",
  };

  const [ava, setAva] = useState();
  const [{ nama, job, phone, email }, setForm] = useState(form);
  const [data, setData] = useState([]);
  const [openModal, setOpen] = useState(false);
  let src = "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleReset = (event) => {
    setData([]);
    setOpen(false);
    window.location.reload();
  };

  const avahandle = (event) => {
    if (event.target.files.length > 0) {
      src = URL.createObjectURL(event.target.files[0]);
      setAva(src);
    }
  };
  const handleAva = (event) => {
    if (event.target.files.length > 0) {
      src = URL.createObjectURL(event.target.files[0]);
      setData({
        ...ava,
        [event.target.name]: src,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    setData([...data, { id: data.length + 1, nama: nama, job: job, phone: phone, email: email, ava: ava }]);
    setForm({
      nama: "",
      job: "",
      phone: "",
      email: "",
    });
  };

  const closeHandle = (event) => {
    setOpen(false);
  };

  const handlePreview = (event) => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      {openModal && <Kartu onClose={closeHandle} data={data} nama={nama} job={job} phone={phone} email={email} ava={ava} />}
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Biodata Form
            </Typography>
            <div class="container mt-4">
              <Row>
                <Col>
                  <h4>Please fill in your personal data</h4>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="nama" value={nama} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Position</Form.Label>
                      <Form.Control type="text" name="job" value={job} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" name="phone" value={phone} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="text" name="email" value={email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Default file input example</Form.Label>
                      <Form.Control type="file" onChange={avahandle} onUpload={handleAva} />
                    </Form.Group>
                    <Button variant="primary" size="sm" type="submit">
                      Submit
                    </Button>
                  </Form>
                  <Col>
                    <Button className="mt-2" size="sm" variant="success" onClick={handlePreview}>
                      Preview
                    </Button>
                  </Col>
                  <Col>
                    <Button className="mt-2" size="sm" variant="danger" onClick={handleReset}>
                      Reset
                    </Button>
                  </Col>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

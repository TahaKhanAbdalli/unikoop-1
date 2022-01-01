import React, { useEffect, useState } from "react";
import "./header.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  ButtonGroup,
  Button,
  DropdownButton,
  Modal,
  Form,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import logo from "../../assets/logo.JPG";
import { BiUser } from "react-icons/bi";
import { Avatar, Badge } from "antd";
import { TiTick } from "react-icons/ti";
import { RiFilter2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import Card from "../card/card";
import towel from "../../assets/towel.JPG";
import towel1 from "../../assets/towe1.JPG";
import { Formik } from "formik";
import * as yup from "yup";
const schema = yup.object().shape({
  heading: yup.string().required(),
  d1: yup.string().required(),
  d2: yup.string().required(),
  d3: yup.string().required(),
  d4: yup.string().required(),
  pjris: yup.string().required(),
  Interne: yup.string().required(),
  levertjis: yup.string().required(),
  virage: yup.string().required(),
});
let data = [
  {
    varients: {
      img: [towel, towel1, towel, towel],
    },
    heading:
      "DropdownButton will forward Button props to the underlying Toggle component",
    d1: "EAN 768798",
    d2: "EAN 768798",
    d3: "EAN 768798",
    d4: "EAN 768798",
    pjris: "€2,445",
    Interne: "P3l1",
    levertjis: "beniji 24 ou",
    virage: "20",
  },
  {
    varients: {
      img: [towel, towel, towel1, towel],
    },
    heading:
      "DropdownButton will forward Button props to the underlying Toggle component",
    d1: "EAN 768798",
    d2: "EAN 768798",
    d3: "EAN 768798",
    d4: "EAN 768798",
    pjris: "€2,445",
    Interne: "P3l1",
    levertjis: "beniji 24 ou",
    virage: "20",
  },
  {
    varients: {
      img: [towel, towel, towel, towel1],
    },
    heading:
      "DropdownButton will forward Button props to the underlying Toggle component",
    d1: "EAN 768798",
    d2: "EAN 768798",
    d3: "EAN 768798",
    d4: "EAN 768798",
    pjris: "€2,445",
    Interne: "P3l1",
    levertjis: "beniji 24 ou",
    virage: "20",
  },
];
const Header = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    heading: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    pjris: "",
    Interne: "",
    levertjis: "",
    virage: "",
    varients: {
      img: [],
    },
  });
  const handleSubmit = (event) => {
    let st = true;
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      st = false;
    }

    setValidated(true);
    data.push(state);
    // if (st !== false) {
    //     if (contextType.UserSignUp.address === undefined) {
    //         st = false;
    //         setTown(true);
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     if (st) {
    //         props.history.push('./signup_adlform1');
    //     }
    // }
  };
  const handleimg = (e) => {
    console.log("handle im");

    const fileObj = [];
    const fileArray = [];
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setState({ ...state, varients: { img: fileArray } });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navDropdownTitle = (
    <i class="fa fa-user" aria-hidden="true">
      <span style={{ marginLeft: "10px" }}>Dropdown</span>
    </i>
  );
  const validate = () => {
    document.getElementById("basicBootstrapForm").formValidation();
  };
  useEffect(() => {
    Array.prototype.forEach.call(
      document.querySelectorAll(".clearable-input>[data-clear-input]"),
      function (el) {
        el.addEventListener("click", function (e) {
          e.target.previousElementSibling.value = "";
        });
      }
    );
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-lightt" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="50px" style={{ marginLeft: "5px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div className="d-flex bg-white dd">
              <Nav.Link href="#features" className="nav-link1">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link1">
                Pricing
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link1">
                Pricing
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link1">
                Pricing
              </Nav.Link>
            </div>
          </Nav>
          <Nav>
            <NavDropdown title={navDropdownTitle} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <BiUser color="#fff" />
                Action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              <Badge dot>
                <Avatar shape="square" icon={<TiTick size={30} />} />
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <div
          style={{ margin: "20px 0px" }}
          className="d-flex justify-content-between "
        >
          <div className="headi"> Artikelen</div>
          <Dropdown as={ButtonGroup}>
            <Button variant="info" onClick={handleShow}>
              Adding form
            </Button>
            <Dropdown.Toggle split variant="primary" id="dropdown-custom-2" />
            <Dropdown.Menu className="super-colors">
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div
          style={{
            background: "#dee2e6",
            padding: "20px",
            display: "flex",
            position: "relative",
            borderRadius: "7px",
          }}
        >
          <div className="filte">
            Filter
            <RiFilter2Line />{" "}
          </div>
          <div style={{ marginLeft: "20px", width: "50%" }}>
            {" "}
            <div class="clearable-input">
              <input type="text" />
              <span data-clear-input>&times;</span>
            </div>
          </div>
          <div style={{ right: "10px", position: "absolute", top: "27px" }}>
            <div className="lef">
              Socteer op{" "}
              <span>
                Toenveogingsdatum <IoIosArrowDown size={20} />
              </span>
            </div>
          </div>
        </div>
        {/* eded */}
        <div
          className="d-flex justify-content-between my-4"
          style={{ alignItems: "center" }}
        >
          <div className="d-flex">
            {[
              "Primary",
              "Secondary",
              "Success",
              "Info",
              "Warning",
              "Danger",
            ].map((variant, index) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                style={{
                  minWidth: "148px",
                  margin: "0px 0.5px",
                }}
                title={
                  <>
                    {index == 0 ? (
                      <AiOutlineHeart style={{ marginRight: "15px" }} />
                    ) : null}
                    {variant}
                    <IoIosArrowDown
                      style={{
                        position: "absolute",
                        right: "7px",
                        top: "11px",
                      }}
                    />
                  </>
                }
                className="ff"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
          <div>596 artikelen</div>
        </div>
        <div
          style={{
            background: "#dee2e6",
            padding: "20px",
            display: "flex",
            position: "relative",
            borderRadius: "7px",
            marginBottom: "20px",
          }}
        >
          DropdownButton will forward Button props to the underlying Toggle
          component
        </div>
        {data.map((data, key) => (
          <Card data={data} key={key} />
        ))}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding card data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Heading"
                    name="Heading"
                    value={state.heading || ""}
                    onChange={(e) =>
                      setState({ ...state, heading: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                {" "}
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Description 1"
                    name="Description 1"
                    value={state.d1 || ""}
                    onChange={(e) => setState({ ...state, d1: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Description 2"
                    name="Description 2"
                    value={state.d2 || ""}
                    onChange={(e) => setState({ ...state, d2: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Description 3"
                    name="Description 3"
                    value={state.d3 || ""}
                    onChange={(e) => setState({ ...state, d3: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Description 4"
                    name="Description 4"
                    value={state.d4 || ""}
                    onChange={(e) => setState({ ...state, d4: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="pjris"
                    name="pjris"
                    value={state.pjris || ""}
                    onChange={(e) =>
                      setState({ ...state, pjris: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="Interne"
                    name="Interne"
                    value={state.Interne || ""}
                    onChange={(e) =>
                      setState({ ...state, Interne: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="levertjis"
                    name="levertjis"
                    value={state.levertjis || ""}
                    onChange={(e) =>
                      setState({ ...state, levertjis: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mx-2 my-2">
                  <Form.Control
                    required
                    // className={styles.newinput}
                    type="text"
                    placeholder="virage"
                    name="virage"
                    value={state.virage || ""}
                    onChange={(e) =>
                      setState({ ...state, virage: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col lg={8}>
                <Form.Group controlId="formFileLg" className="mx-2 my-2">
                  <Form.Label>Add single or multiple images</Form.Label>
                  <Form.Control
                    type="file"
                    size="lg"
                    multiple
                    onChange={(e) => handleimg(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={4} style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <button
                  className="newbutton"
                  type="submit"
                  // onClick={() => props.history.push('./signup_adlform1')}
                >
                  <BsBoxArrowInRight style={{ marginRight: "5px" }} />
                  Add to card
                </button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;

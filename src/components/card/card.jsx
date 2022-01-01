import React, { useState } from "react";
import { Row, Col, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import towel from "../../assets/towel.JPG";
import "./card.css";
import { FaMinus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart, AiFillSignal } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import nlflag from "../../assets/nlflag.png";
const Card = (props) => {
  const data = props.data;
  const [state, setState] = useState({
    count: 0,
    indeximg: 0,
  });
  const add = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const minus = () => {
    setState({ ...state, count: state.count - 1 });
  };
  return (
    <div class="bb">
      <Row>
        <Col md={2} lg={2}>
          <img src={data.varients.img[state.indeximg]} alt="" width="70%" />
        </Col>
        <Col md={8} lg={8}>
          <div className="d-flex flex-column">
            <div>
              <div className="d-flex">
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "19px",
                    fontWeight: "600",
                    width: "45%",
                  }}
                  className="txt"
                >
                  {data.heading}
                </div>
                <div className="d-flex">
                  <div className="variat">
                    {data.varients.img.length} varients
                  </div>
                  {data.varients.img.map((towel, index) => (
                    <img
                      src={towel}
                      alt=""
                      width="70px"
                      style={{ padding: "0px 5px", cursor: "pointer" }}
                      className={index == state.indeximg ? "active" : null}
                      onClick={() => setState({ ...state, indeximg: index })}
                    />
                  ))}
                </div>
              </div>

              <div className="d-flex linh">
                <div>{data.d1}</div>
                <div className="vertical"></div>
                <div>{data.d2}</div>
                <div className="vertical"></div>
                <div>{data.d3}</div>
                <div className="vertical"></div>
                <div>{data.d4}</div>
              </div>
            </div>
            <div
              class="d-flex flex-row justify-content-between"
              style={{ textAlign: "left", marginTop: "30px" }}
            >
              <div class="cl">
                <div class="line_heade">Prijs</div>
                <div>{data.pjris}</div>
              </div>
              <div class="cl">
                <div class="line_heade">Interne referentie</div>
                <div>{data.Interne}</div>
              </div>
              <div class="cl">
                <div class="line_heade">levertjis</div>
                <div>{data.levertjis}</div>
              </div>
              <div class="cl">
                <div class="line_heade">virage</div>
                <div>{data.virage}</div>
              </div>
              <div class="icn" onClick={minus}>
                <FaMinus />
              </div>
              <div class="icn bor">{state.count}</div>
              <div class="icn" onClick={add}>
                <AiOutlinePlus />
              </div>
              <div className="onmar three">
                <AiOutlineHeart style={{ marginRight: "5px" }} size={20} />
                IN WINKELWAGEN
              </div>
              <div class="icn onmar">
                <AiOutlineHeart size={20} color="black" />
              </div>
              <div class="icn onmar">
                <AiFillSignal size={20} color="black" />
              </div>
              <div class="icn onmar">
                <FaEnvelope size={20} color="black" />
              </div>
            </div>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div className="d-flex flex-column justify-content-between h-100">
            <Dropdown as={ButtonGroup}>
              <Button variant="info" className="wb">
                mix it up style-wise
              </Button>
              <Dropdown.Toggle
                split
                variant="primary"
                id="dropdown-custom-2"
                className="wb"
              />
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
            <div className="d-flex align-items-center justify-content-center">
              NL
              <img src={nlflag} alt="" width="45px" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;

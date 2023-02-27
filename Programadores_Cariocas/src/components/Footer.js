import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logofooter.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={20} sm={12}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="text-md-center">
            <br/>
            <h6>Todos os Direitos Reservados. © 2023</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

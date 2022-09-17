

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import RVwhite2 from "../assets/img/RVwhite2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="/#home">
            <img className ="RVlogo2" src={RVwhite2
            } alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ramonvelardeglaser/" target="_blank"><img src={navIcon1} alt="Ramon velarde's Linked In profile" /></a>
                <a href="https://www.facebook.com/Velardemusic" target="_blank"><img src={navIcon2} alt="Ramon's Facebook profile" /></a>
                <a href="https://www.instagram.com/velarde83/" target="_blank"><img src={navIcon3} alt="Ramon's Instagram Profile" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
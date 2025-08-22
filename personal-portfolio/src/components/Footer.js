import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon5.svg";
import copyright from "../assets/img/c.svg";

export const Footer = () =>
{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/fitore-tahiri-772702167/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.facebook.com/fitoretahirii/"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://github.com/fitoretahiri"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>© Copyright {new Date().getFullYear()}. All Rights Reserved to Fitore Tahiri!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
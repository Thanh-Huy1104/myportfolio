import {Container, Row, Col} from "react-bootstrap"
import ME from '../assets/img/me.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <section>
    <Container>
        <Row>
            <Col>
                <div data-aos="fade-right" data-aos-duration="3000" className="About_container">
                
                <p><h2> A little about me</h2>Hi, my name is Thanh-Huy and I'm an aspiring software engineer. I want to learn all new sorts of technogies and apply them to my projects. My end goal is to become a data scientist. I know the road is arduous but I'm here along for the ride. <br/><br/> Using my skills in front-end technologies such as React.js, Node, Git, and SQL, I want to create projects that will synergies AI technogies and web development. That is why I am currently learning how to use Python to create my own AI models.
                <br/><br/> I am a student at ETS (Ecole de technologie superieure) studying software engineering which is based in Montreal, Quebec and I'm always open for new opportunities to learn, grow, and to work in team environment.
                </p>
                <img src={ME} className="About_img" alt="isME"/>
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div data-aos="fade-left" data-aos-duration="3000" className="Contact_container">
                    <h5>Skills</h5>
                    <p className="pill">Front-End</p>
                    <p className="pill">Graphic Design</p>
                    <h5>Location</h5>
                    <p>Montreal, QC</p>
                    <h5>Email</h5>
                    <p>etienne01.nguyen@gmail.com</p>
                    <h5>Phone</h5>
                    <p> (438) 409-1737</p>
                    <h5>Education</h5>
                    <p>ETS (Ecole de technologie superieure) - Software Engineering 2022-2027</p>
                    <h5>Languages</h5>
                    <p className="pill">English</p>
                    <p className="pill">French</p>
                    <p className="pill">Vietnamese</p>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default About
import {Container, Row, Col} from "react-bootstrap"
import ME from '../assets/img/me.png';
const About = () => {
  return (
    <section>
    <Container>
        <Row>
            <Col>
                <div className="About_container">
                
                <p><h2> A little about me</h2>My name is Thanh-Huy and I'm currently a student in university studying to become a future software engineer. I'm passionate about learning new things and I'm always looking for new opportunities to learn and grow.
                My goal is to become a full-stack developer and I'm currently learning React, Node.js, and MongoDB. I'm also learning how to use Git and GitHub to manage my projects.
                When I'm not coding, I enjoy playing video games, watching movies, and listening to music.</p>
                <img src={ME} className="About_img" alt="isME"/>
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="Contact_container">
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
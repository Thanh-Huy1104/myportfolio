import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Howtobenice_img from "../assets/img/howtobenice.svg";

const Howtobenice = () => {
  return (
    <Container className="projects-container1">
    <Row>
        
        <Col>   
            <h5>Feature Project: Howtobenice.io</h5>
            <p>A web app to convert toxic words into nice words. By writing an entry, an AI model parses through and detects toxic grammar, it then returns an input from a dictionary. This web app was made at the MAIS Hacks at Mcgill</p>
            <ul>
            <li>Node</li>
            <li>React</li>
            <li>Ai Model</li>
            <li>Python</li>
            </ul>
        </Col>  
        <Col>
            <a href='https://github.com/Ji-One1/MAIS-Hacks'><img className="img_centered" src={Howtobenice_img} alt='Next-class project'></img></a>
        </Col>
    </Row>
    </Container>
  )
}

export default Howtobenice
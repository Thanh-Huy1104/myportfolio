import { Container, Row, Col } from "react-bootstrap"
import Next_Class from '../assets/img/next-class.svg';

const NextClass = () => {
  
  return (
    <Container className="projects-container2">
    <Row>
        <Col>
            <a href='https://github.com/Ji-One1/Next-Class'><img className="img_centered" src={Next_Class} alt='Next-class project'></img></a>
        </Col>
        <Col>   
            <h5>Feature Project: Next Class</h5>
            <p>A web app made to vizualise a students schedule. By adding friends, the student can synchronize their schedule with others to be able to plan their free time. This web app was made at the CodeJam 12 at Mcgill</p>
            <ul>
            <li>Node</li>
            <li>React</li>
            <li>Firebase</li>
            <li>McGill API</li>
            </ul>
        </Col>  
        
    </Row>
    </Container>
  )
}

export default NextClass
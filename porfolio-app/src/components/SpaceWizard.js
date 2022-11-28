import {Container, Row, Col} from 'react-bootstrap';
const Projects = () => {
  return (
    <Container className='projects-container2' id='projects'>
        <Row>
            <Col>
                <div className='ratio ratio-16x9'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MgTjDKk2ZT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Col>
            <Col>
                <h5>Featured Project: Space Wizards Adventure</h5>
                <p>Space Wizard's Adventure was a simple game I made for an undegraduate class. To me, it was one of the core projects that initially made me interested in coding. It uses lightweight block based programming.</p>
            </Col>    
        </Row>
    </Container>
  )
}

export default Projects
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Row, Col, Container} from 'react-bootstrap';
import Python_logo from '../assets/img/python.svg';
import React_logo from '../assets/img/react.svg';
import Illustrator_logo from '../assets/img/illustrator.svg';
import C_logo from '../assets/img/C_lang.svg';
import Firebase_logo from '../assets/img/firebase.svg';
import SQl_logo from '../assets/img/SQL.svg';
import CSS_logo from '../assets/img/CSS.svg';
import HTML_logo from '../assets/img/html.svg';
import JavaScript_logo from '../assets/img/logo-javascript.svg';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>
                        I have a wide range of skills and I'm always looking to learn more. <br/>Here are some of the technologies I've been working with recently.
                    </p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={Python_logo} alt="Python"/>
                            <h5>Python</h5>
                        </div>
                        <div className='item'>
                            <img src={React_logo} alt="React"/>
                            <h5>React.js & Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={HTML_logo} alt="Full Stack Web Dev"/>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={CSS_logo} alt="Full Stack Web Dev"/>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={JavaScript_logo} alt="Full Stack Web Dev"/>
                            <h5>Javascript</h5>
                        </div>
                        <div className='item'>
                            <img src={Firebase_logo} alt="Firebase"/>
                            <h5>Firebase</h5>
                        </div>
                        <div className='item'>
                            <img src={SQl_logo} alt="SQL"/>
                            <h5>SQL</h5>
                        </div>
                        <div className='item'>
                            <img src={Illustrator_logo} alt="Illustrator"/>
                            <h5>Graphic Design</h5>
                        </div>
                        <div className='item'>
                            <img src={C_logo} alt="C"/>
                            <h5>C programming</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills
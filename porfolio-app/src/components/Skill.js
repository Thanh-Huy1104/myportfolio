import {Container, Row, Col} from "react-bootstrap"
import HTML from '../assets/img/html.svg'
import react_logo from '../assets/img/react.svg'
import JavaScript_logo from '../assets/img/logo-javascript.svg'
import Python_logo from '../assets/img/python.svg'
import C_logo from '../assets/img/C_lang.svg'
import SQL_logo from '../assets/img/SQL.svg'
import Firebase_logo from '../assets/img/firebase.svg'
import Illustrator_logo from '../assets/img/illustrator.svg'
import Solidworks_logo from '../assets/img/solidworks.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skill = () => {
  return (
    <section className="skills" id='skills'>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down" className="skill_container">
                        <img src={JavaScript_logo} className="top_corner_img" alt='Me'/>
                        <h3>JavaScript</h3>
                        <p>I would call JavaScript my main language since I'm currently more focused on site design. I often do projects with JavaScript.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down"  className="skill_container">
                        <img src={react_logo} className="top_corner_img" alt='Me'/>
                        <h3>React.js</h3>
                        <p>I'm most familiar with React as my main framework since I've done many projects with it. I'm 
                        constantly learning new things such a learning to write clean code.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down"  className="skill_container">
                        <img src={HTML} className="top_corner_img" alt='Me'/>
                        <h3>HTML/CSS</h3>
                        <p>A good site is nothing without styling, I believe that design changes who your customers effectivly choose who to work with.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down"  className="skill_container">
                        <img src={Python_logo} className="top_corner_img" alt='Me'/>
                        <h3>Python</h3>
                        <p>Python is a language that I've been using for a while now. I've used it for many projects such as training models, games and automating simple tasks.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div  data-aos="fade-down" className="skill_container">
                        <img src={C_logo} className="top_corner_img" alt='Me'/>
                        <h3>C</h3>
                        <p>A language that I got familiar during my first semester in university. It taught me, how computers at it's core computers can be devided in simple "1" and "0".</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down"  className="skill_container">
                        <img src={SQL_logo} className="top_corner_img" alt='Me'/>
                        <h3>SQL/MySQL</h3>
                        <p>After following an online course, I've made some projects with SQL and can affirm that I understand the fundemental concept of the language.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down" className="skill_container">
                        <img src={Illustrator_logo} className="top_corner_img" alt='Me'/>
                        <h3>Illustrator</h3>
                        <p>I've used Illustrator for many years now. As I was part of a club, I got the change to do many art projects under the mentorship of my teachers.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down" className="skill_container">
                        <img src={Firebase_logo} className="top_corner_img" alt='Me'/>
                        <h3>Firebase</h3>
                        <p> I got to work Firebase at one of my recent Hackaton. I love the interface and the small amount of code needed to write efficient databases.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <div data-aos="fade-down"  className="skill_container">
                        <img src={Solidworks_logo} className="top_corner_img" alt='Me'/>
                        <h3>SolidWorks/AutoCAD</h3>
                        <p>Both are technogies that I am comfortable with. I'm proud that I have the change to often be able to print out these projects on my 3D printer.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skill
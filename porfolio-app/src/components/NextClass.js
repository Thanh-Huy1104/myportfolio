import React from 'react'
import { Col, Container} from 'react-bootstrap'
import NextClassImg from '../assets/img/Phone_Next_class.svg'
import Main_Screen_img from '../assets/img/main_screen_next.svg'
const NextClass = () => {
  return (
    <section>
      <Container className='Next_Class_Container'>
          <Col xl={4} xs={12} md={6} className='Next_class1'>
            <img src={NextClassImg} alt='NextClass'/>
          </Col>
          <Col xl={4} xs={12} md={6} className='Next_class2'>
            <p>
              Next Class is a web app that allos the McGill Students to sync their class schedule and get notified when the next class is about to start. This project was made in collabaration with 3 other students at a Hackaton at Mcgill University. I was responsible for the front-end development of the app. I used React.js for the front-end development and Firebase for the back-end development.
            </p>
          <img src={Main_Screen_img} alt='NextClass'/>
        </Col>
      </Container>
    </section>
  )
}

export default NextClass
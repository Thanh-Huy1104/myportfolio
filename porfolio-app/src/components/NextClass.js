import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NextClassImg from '../assets/img/Phone_Next_class.svg'
const NextClass = () => {
  return (
    <Container className='Next_Class_Container'>
        <Col>
            <h1>Next Class</h1>
            <img src={NextClassImg} alt='NextClass'/>
        </Col>
        <Col>
            Next Class is a project that I got the chance to work on during a Hackaton at McGill University. It allows students to sync schedules with their friends and get notified when they have a class together. Our team and I used Firebase and React Js to create this web app.
        </Col>
        
    </Container>
  )
}

export default NextClass
import NextClass_Img from '../assets/img/NextClass_img.png'
import Project from './Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const NextClass = () => {

  return (

    <Project text="Next Class is a web app that allows McGill Students to sync their class schedules and get notified when their next class is about to start. This project was made in collabaration with 3 other students at a Hackaton at Mcgill University. The project uses React.js for the front-end and Firebase for the back-end." title="Next Class | Scheduler" img={NextClass_Img} link="https://next-class-website.vercel.app/" />
  )
}

export default NextClass
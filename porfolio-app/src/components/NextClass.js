import NextClass_Img from '../assets/img/NextClass_img.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const NextClass = () => {
  return (
    <section data-aos="fade-down" id="projects">
      <div className='next-class-container'>
          <div className='next-class-content'>
            <div className='next-class-title'>
            <p>UI/Programming</p>
            <h1>Next Class | Scheduler</h1>
            </div>
          <div className='next-class-text'>
            <p>Next Class is a web app that allows McGill Students to sync their class schedules and get notified when their next class is about to start. This project was made in collabaration with 3 other students at a Hackaton at Mcgill University. The project uses React.js for the front-end and Firebase for the back-end. 
            </p>
          </div>
       </div>
       <div className='next-class-img'>
            <img src={NextClass_Img} className="next-class-phoneimg" alt='Next Class' />
      </div>
      </div>
    </section>
  )
}

export default NextClass
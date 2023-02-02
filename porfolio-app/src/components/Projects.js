import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Project = ({text, title, img, link}) => {
  return (
    <section data-aos="fade-down" id="projects">
      <div className='next-class-container'>
          <div className='next-class-content'>
            <div className='next-class-title'>
            <p>UI/Programming</p>
            <h1>{title}</h1>
            </div>
          <div className='next-class-text'>
            <p>{text}</p>
          </div>
       </div>
       <div className='next-class-img'>
            <a href={link}><img src={img} className="next-class-phoneimg" alt='Next Class'></img></a>
      </div>
      </div>
    </section>
  )
}

export default Project
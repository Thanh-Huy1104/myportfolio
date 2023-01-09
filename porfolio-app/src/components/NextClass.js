import NextClass_Img from '../assets/img/NextClass_img.png'

const NextClass = () => {
  return (
    <section>
      <div className='next-class-container'>
          <div className='next-class-content'>
            <div className='next-class-title'>
            <p>UI/Programming</p>
            <h1>Next Class | Scheduler</h1>
            </div>
          <div className='next-class-text'>
            <p>Next Class is a web app that allos the McGill Students to sync their class schedule and get notified when the next class is about to start. This project was made in collabaration with 3 other students at a Hackaton at Mcgill University. I was responsible for the front-end development of the app. I used React.js for the front-end development and Firebase for the back-end development.
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
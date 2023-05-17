import Project from './Projects'
import Sickness_img from '../assets/img/SicknessHacks.png'

const RedBird = () => {
  return (
    <Project text="Introducing our web app, the solution to Quebec's overcrowded emergency rooms during the Covid pandemic. Say goodbye to long waits and uncertainty. Simply enter your symptoms and receive a preliminary prediction on ur health, taking control of your health. With our AI model, you will receive a set of precautions to take and a score determining if you do need to go to the hostpital." title="Sickness Hacks | AI Project" img={Sickness_img} link="https://devpost.com/software/salle-d-urgence-declogger?ref_content=user-portfolio&ref_feature=in_progress"/>
  )
}

export default RedBird
import { Container, Row, Col} from "react-bootstrap"
import Logo from '../assets/img/Logo.svg';
import Linkedin_logo from '../assets/img/linkedin.png';
import Github_logo from '../assets/img/github.png';
import Discord_logo from '../assets/img/discord.png';

const Footer = () => {
  return (
    <footer className="footer">
            <img src={Logo} className='footer-logo' alt="logo" />
    </footer>
  )
}

export default Footer
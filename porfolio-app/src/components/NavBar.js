import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';
import Logo from '../assets/img/Logo.svg';
import Linkedin_logo from '../assets/img/linkedin.png';
import Github_logo from '../assets/img/github.png';
import Discord_logo from '../assets/img/discord.png';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} className='navbar-logo' alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className='navbar-toggle-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link' }  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
           <div className='social-icon'>
              <a href='https://discordapp.com/users/274340204939313153'><img src={Discord_logo} alt='Discord Logo'/></a>
              <a href='https://www.linkedin.com/in/thanh-huy-nguyen-703606220/'><img src={Linkedin_logo} alt='Linkedin Logo'/></a>
              <a href='https://github.com/Thanh-Huy1104'><img src={Github_logo} alt='Github logo'/></a>
           </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
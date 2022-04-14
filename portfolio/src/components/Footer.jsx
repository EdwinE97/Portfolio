import '../App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


const Footer = () =>{

    return(
            <>
            <footer className='footer-container'>
                <div className='footer-links'>
                    <a className='social-icon' href='https://www.linkedin.com/in/edwin-escobar-704c/'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                    <a className='social-icon' href='https://www.instagram.com/edwin_escobar97/'><FontAwesomeIcon icon={faInstagram}size='2x'/></a>
                    <a className='social-icon' href='https://github.com/EdwinE97'><FontAwesomeIcon icon={faGithub}size='2x'/></a>
                    <p className='cpyrght'>&copy; 2022</p>
                </div>
            </footer>
            </>
    )
}


export default Footer;
import '../App.css'
import React from 'react'
import {Link} from 'react-scroll'



const Nav = () => {


    return (
        <>
        <nav>
            <h1 className='my-name'>Edwin Escobar</h1>
            <h1 className='my-name'>Portfolio</h1>
            <ul className='nav-links'>
                <li><Link to='Contact' spy={true} smooth={true} offset={50} duration={800} >Contact</Link></li>
                <li><Link to='Projects' spy={true} smooth={true} offset={50} duration={800}> Projects</Link></li>
                <li><Link to='About' spy={true} smooth={true} offset={50} duration={800}> About</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;
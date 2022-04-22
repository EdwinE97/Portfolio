import '../App.css'


const About = () =>{
    return(
        <>
        <div className='about-container' id='About'>
            <div className='about-container-column'>
            <img className='img-me' alt='profile' src='./img/edwin pic.jpeg'></img>
            <h1 style={{color:'brown'}}>About Me</h1>
            <h2>Software Engineer</h2>
            <p> Born in Ecuador, raised in NC. Throughout my career I have been a firm beli <a href='img/Edwin_E_Resume.pdf'><p style={{color:'brown'}}>here!</p></a> </p>
            
            </div>
        </div>
        </>

    )
}

export default About;
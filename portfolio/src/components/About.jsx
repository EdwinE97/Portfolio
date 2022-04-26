import '../App.css'


const About = () =>{
    return(
        <>
        <div className='about-container' id='About'>
            <div className='about-container-column'>
            <img className='img-me' alt='profile' src='./img/edwin pic.jpeg'></img>
            <h1 style={{color:'brown'}}>About Me</h1>
            <h2>Software Engineer</h2>
            <p> Born in Ecuador, raised in NC. Curiosity has led me to be many different things in my life. From being a sales professional to becoming a meat cutter. Currently I am a coding apprentice at Road To Hire learning key concepts in both coding and professional development. Im excited to say that I am pursuing a career that keeps me curious every day! Learning new coding languages and techniques to help solve pressing issues is what motivates me everyday. You can learn more about my work history   <a href='img/Edwin_E_Resume.pdf'><p style={{color:'brown'}}>here!</p></a> </p>
            
            </div>
        </div>
        </>

    )
}

export default About;
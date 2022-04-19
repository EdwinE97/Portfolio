import '../App.css'


const About = () =>{
    return(
        <>
        <div className='about-container' id='About'>
            <div className='about-container-column'>
            <img className='img-me' alt='profile' src='./img/edwin pic.jpeg'></img>
            <h1 style={{color:'brown'}}>About Me</h1>
            <h2>Software Engineer</h2>
            <p>I like to solve problems. Throughout my career, I have been driven by my intellectual curioisity to find answers to the most pressing questions. Whether it's finding a perfect song for a car ride or fixing an error in a line of code.
            Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs effectively. Confident communicator, strategic thinker, and innovative creator to develop software. Check out my resume <a href='img/Edwin_E_Resume.pdf'><p style={{color:'brown'}}>here!</p></a> </p>
            
            </div>
        </div>
        </>

    )
}

export default About;
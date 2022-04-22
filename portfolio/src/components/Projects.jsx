import "../App.css";


const Projects = () => {
  return (
    <>
      <div className="projects-container" id='Projects'>
        <hr className="border-line"></hr>
        <div className="title-container">
          <hr className="title-line"></hr>
          <h1 style={{ color: "brown" }}>Projects</h1>
          <hr className="title-line"></hr>
        </div>

        {/* Gateway */}
        <div className="project-column-grid">
          <div className="project-column-grid_column">

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
            <h3>HTML | CSS </h3>
            <button className="project-btn"> <a href='https://edwine97.github.io/Gateway/'>Take A Look</a></button>
            <button className="project-btn"><a href="https://github.com/EdwinE97/Gateway">Github Link</a></button>
          </div>
       
            {/* Gateway */}
      
          <div className="project-column-grid_column">

            <div className="project-img-container">
              <img
                className="project-img"
                alt="QH"
                src="./img/QH.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Hope-Hacks</h2>
            <h3>HTML | CSS | Node.js </h3>
            <button className="project-btn"><a href="https://edwine97.github.io/hopehacks-g3/">Take A Look</a></button>
            <button className="project-btn"><a href="https://github.com/EdwinE97/hopehacks-g3">Github Link</a></button>
          </div>
      
            {/* Gateway */}
        
          <div className="project-column-grid_column">
           

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Slappy"
                src="./img/Slappy.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Ecommerce</h2>
            <h3>HTML | CSS | React | MYSQL </h3>
            <button className="project-btn"> <a href = 'http://slappys.s3-website-us-east-1.amazonaws.com/'>Take A Look</a></button>
            <button className="project-btn"><a href="https://github.com/EdwinE97/ecommerce">Github Link</a></button>
          </div>
       
          {/* Gateway */}
     
          <div className="project-column-grid_column">

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Netflix"
                src="./img/Netflix.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Redesign</h2>
            <h3>Node.js | MYSQL </h3>
            <button className="project-btn"><a href="https://netflix-redesign-project.herokuapp.com/">Take A Look</a></button>
            <button className="project-btn"><a href="https://github.com/Dood3l/netflix-redesign">Github Link</a></button>
   
          </div>

<div className="project-column-grid_column">
           

            <div className="project-img-container">
              <img
                className="project-img"
                alt="FGP"
                src="./img/FGP.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Code For Justice</h2>
            <h3>HTML | CSS | React | MYSQL </h3>
            <button className="project-btn"> <a href = 'https://edwine97.github.io/firstGroupProject/'>Take A Look</a></button>
            <button className="project-btn"><a href="https://github.com/EdwinE97/firstGroupProject">Github Link</a></button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Projects;

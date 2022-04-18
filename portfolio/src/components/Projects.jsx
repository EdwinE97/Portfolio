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
            <button className="project-btn" href=''>Take A Look</button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
            <h3>HTML | CSS </h3>
          </div>
       
            {/* Gateway */}
      
          <div className="project-column-grid_column">
            <button className="project-btn"><a href="https://edwine97.github.io/hopehacks-g3/">Take A Look</a></button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="QH"
                src="./img/QH.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Hope-Hacks</h2>
            <h3>HTML | CSS | Node.js </h3>
            
          </div>
      
            {/* Gateway */}
        
          <div className="project-column-grid_column">
            <button className="project-btn"> <a href = 'http://slappys.s3-website-us-east-1.amazonaws.com/'>Take A Look</a></button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Slappy"
                src="./img/Slappy.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Ecommerce</h2>
            <h3>HTML | CSS | React | MYSQL </h3>
          </div>
       
          {/* Gateway */}
     
          <div className="project-column-grid_column">
            <button className="project-btn"><a href="https://netflix-redesign-project.herokuapp.com/">Take A Look</a></button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Netflix"
                src="./img/Netflix.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Redesign</h2>
            <h3>Node.js | MYSQL </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

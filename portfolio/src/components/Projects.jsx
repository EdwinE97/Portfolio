import "../App.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <hr className="border-line"></hr>
        <div className="title-container">
          <hr className="title-line"></hr>
          <h1 style={{ color: "brown" }}>Projects</h1>
          <hr className="title-line"></hr>
        </div>
        <div className="project-column-grid">
          <div className="project-column-grid_column">
            <button className="project-btn">Take A Look</button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
          </div>
        </div>

        <div className="project-column-grid">
          <div className="project-column-grid_column">
            <button className="project-btn">Take A Look</button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
          </div>
        </div>

        <div className="project-column-grid">
          <div className="project-column-grid_column">
            <button className="project-btn">Take A Look</button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
          </div>
        </div>

        <div className="project-column-grid">
          <div className="project-column-grid_column">
            <button className="project-btn">Take A Look</button>

            <div className="project-img-container">
              <img
                className="project-img"
                alt="Gateway"
                src="./img/gateway.png"
              ></img>
            </div>

            <h2 style={{color:'brown'}}>Gateway</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

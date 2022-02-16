import React from "react";

function Projects() {
  return (
    <div>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-title">
            <h3>Pregame</h3>
          </div>
          <a href="https://tbellenger.github.io/playlist/">
            <img alt="Pregame" class="card2" src={require("../../assets/images/Pregame.gif")} />
            </a>
          <p>Pregame is a webpage designed for music lovers to have a preview about the bands/artists' performance of the festivals through Spotify tracks. The search engine will automatically generate a spotify playlist with the top track from each of the artists in the lineup based on the corresponding search result.</p>
        </div>

        <div className="project-card">
        <div className="project-title">
            <h3>Flavor Express</h3>
          </div>
          <a href="_blank"><img alt="FlavorExpress" src={require("../../assets/images/flavor-express.png")}/></a>
          <p>FlavorExpress is an application that allows user to look up recipes. User are able to create an account to join the community.Once joined, user can leave comments, upload recipes, rate other recipes and delete recipes/ratings. Flavor Express is a good place to share your recipes and thoughts and ideas of cooking. The application also provides Express Hints for busy users to get a quick and easy recipe that could be done shortly. It is worth trying out.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
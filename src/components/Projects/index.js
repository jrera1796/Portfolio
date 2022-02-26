import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
    <div>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-title">
            <h3>Pregame</h3>
            <div class="project-tag">#Music #Spotify #Playlists</div>
            <div className="project-links">
              <a className="links" href="https://tbellenger.github.io/playlist/"><FontAwesomeIcon icon={faCoffee} />Website</a>
            </div>
            <br></br>
          </div>
          <div>
            <div className="project-img">
              <a href="https://tbellenger.github.io/playlist/">
                <img alt="Pregame" src={require("../../assets/images/Pregame.gif")} />
              </a>
            </div>
            <div className="project-description">
              <p class="card-description">Pregame is website that creates a playlists from the artists of any given concert or music festival lineup.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <h3>Flavor Express</h3>
            <div class="project-tag">#Food #Recipes</div>
            <div className="project-links">
              <a className="lins" href="/"><span>Icon </span>Website</a>
            </div>
            <br></br>
          </div>
          <div>
            <div className="project-img">
              <a href="https://flavor-express.herokuapp.com" target="_blank" rel="noreferrer" noopner>
                <img alt="FlavorExpress" src={require("../../assets/images/flavor-express.png")} />
              </a>
            </div>
            <div className="project-description">
              <p class="card-description">FlavorExpress is a networking-like site where users can view and create recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faJs,
  faHtml5,
  faJava,
  faReact,
  faGit,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const StageCube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="stars" id="stars"></div>
      <div className="stars" id="stars2"></div>
      <div className="stars" id="stars3"></div>

      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faJava} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJs} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGit} color="#EC4D28" />
        </div>
      </div>
    </div>
  )
}

export default StageCube

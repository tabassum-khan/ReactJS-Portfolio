import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Socials = () => {
  return (
    <div className="social-container">
      {/**The rel attribute specifies the relationship between the current document and the linked document.
        Only used if the href attribute is present. */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tabassum-khan"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/tabassum-khan"
      >
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a>
    </div>
  )
}

export default Socials

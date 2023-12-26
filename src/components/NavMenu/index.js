import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'

class NavMenu extends React.Component {
  render() {
    return (
      <nav>
        <NavLink
          className="nav-link"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        {/*Exact property is used to match the exact value with the URL.*/}
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    )
  }
}

export default NavMenu

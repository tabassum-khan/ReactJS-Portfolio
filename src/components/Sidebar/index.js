import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/t-logo.png'
import LogoSubtitle from '../../assets/images/t-sub.png'
import Socials from '../Socials'
import NavMenu from '../NavMenu'

/*
    --> Link component uses "to" prop to describe the location where the links should navigate to.
    --> <Link> is used to set the URL and keep track of browsing history.
    --> Anytime we link to an internal path, we will use <Link> instead of <a href="">.
*/

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="nav-link logo" to="/">
      <img className="logo-img" src={Logo} alt="logo"></img>
      <img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"></img>
    </Link>

    <NavMenu />

    <Socials />
  </div>
)

export default Sidebar

import './index.scss'
import './loader'
import Logo from '../../assets/images/t-logo.png'
import LogoSubtitle from '../../assets/images/t-sub.png'
import Canvas2 from '../Canvas/Canvas2'

const Loader = () => {
  return (
    <div className="preloader">
      {/* <Canvas2 /> */}
      <div className="inner">
        <img className="logo-img" src={Logo} alt="logo"></img>
        <img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"></img>
        <span>Tabassum is working</span>
        <div className="progress-bar">
          <div className="progress-bar_bg">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader

import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader'

const Layout = () => {
  return (
    <div className="layout">
      <Loader />

      {/** SIDE MENU */}
      <Sidebar />

      {/**TOP TAGS */}
      <span className="tags top-tags">
        <span>&lt;html&gt;</span>
        <br />
        <span>&lt;body&gt;</span>
      </span>

      <div className="page">
        {/**OUTLET will help render the child component inside the parent component's UI if the route matches the child route   */}
        <Outlet />
      </div>

      {/**Bottom TAGS */}
      <span className="tags bottom-tags">&lt;/body&gt;</span>
    </div>
  )
}

export default Layout

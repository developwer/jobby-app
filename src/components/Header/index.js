import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {BsBriefcaseFill} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="BgForHeader">
      <ul className="list-container">
        <li className="logo-container">
          <Link to="/">
            <img
              className="webSiteLogo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
        </li>

        <li className="nav-links-container">
          <Link to="/" className="nav-link">
            <h1 className="nav-to-name">Home</h1>
            <BsBriefcaseFill className="nav-icon" />
          </Link>
          <Link to="/jobs" className="nav-link">
            <h1 className="nav-to-name">Jobs</h1>
            <BsBriefcaseFill className="nav-icon" />
          </Link>
        </li>

        <li className="nav-button-container">
          <FiLogOut className="nav-icon" onClick={onClickLogOut} />
          <button
            className="logout-button"
            type="button"
            onClick={onClickLogOut}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)

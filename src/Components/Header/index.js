import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <nav className="nav-ele">
      <Link to="/" className="link-ele">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="logo"
          alt="website logo"
        />
      </Link>
      <button type="button" className="button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)

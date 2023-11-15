import { Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearToken } from '../../../store/userSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.user.userData)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Noxe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isLogged && (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tvShows">
                    Tv Shows
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/celebs">
                    Celebs
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    Search
                  </Link>
                </li>
              </ul>
            </>
          )}

          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
            <div className="socialLinks d-flex order-last order-lg-first">

              <i className="fa-brands fa-facebook me-3">
                <Link></Link>
              </i>
              <i className="fa-brands fa-youtube me-3">
                <Link></Link>
              </i>
              <i className="fa-brands fa-spotify me-3">
                <Link></Link>
              </i>
              <i className="fa-brands fa-instagram me-3">
                <Link></Link>
              </i>
            </div>

            {isLogged ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={() => dispatch(clearToken())}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

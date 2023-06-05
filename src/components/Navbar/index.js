// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-items">
                <li className="list-item">
                  <Link to="/" className="link-class-light">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-class-light">
                    About
                  </Link>
                </li>
              </ul>

              <button
                type="button"
                className="theme-button"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-items">
                <li className="list-item">
                  <Link to="/" className="link-class-dark">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-class-dark">
                    About
                  </Link>
                </li>
              </ul>

              <button
                type="button"
                className="theme-button"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar

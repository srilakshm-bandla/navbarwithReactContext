// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <div className="not-found-container">
              <Navbar />
              <div className="not-found-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="not-found-heading-light">Lost Your Way?</h1>
                <p className="text-light">We cannot seem to find the page</p>
              </div>
            </div>
          ) : (
            <div className="not-found-container">
              <Navbar />
              <div className="not-found-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="notfound"
                  className="not-found-image"
                />
                <h1 className="not-found-heading-dark">Lost Your Way?</h1>
                <p className="text-dark">We cannot seem to find the page</p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

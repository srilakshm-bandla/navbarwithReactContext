// Write your code here
// Write your code here

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="about-container">
              <Navbar />
              <div className="about-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="heading-light">About</h1>
              </div>
            </div>
          ) : (
            <div className="about-container">
              <Navbar />
              <div className="about-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="heading-dark">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

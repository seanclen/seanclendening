import React from "react"
import Helmet from 'react-helmet'
import Header from "../components/Header"
import '../assets/sass/_all.sass'

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Header location={location} />
        <div>
          <main className="section-container">{children}</main>
        </div>
        <footer>
          <div className="bottom level">
            <div className="level-left">
              © {new Date().getFullYear()} Sean Clendening &mdash; Wilmington, Delaware
            </div>
            <div className="level-right">
              <a href="https://bulma.io">
                <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout

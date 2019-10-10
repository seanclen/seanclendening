import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Header from "../components/header"
import '../assets/sass/_all.sass'

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header location={location} />
        <div>
          <main className="section-container">{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout

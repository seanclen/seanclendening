import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import '../assets/sass/_all.sass'

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <div>
        <Header location={location} />
        <div>
          <main>{children}</main>
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

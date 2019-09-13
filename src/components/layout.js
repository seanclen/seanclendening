import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <div>
        <Header location={location} />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
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

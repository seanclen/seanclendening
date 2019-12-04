import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {

  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Hello" />
        <section className="hero landing-intro is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="is-inline-block">
                <h1 className="title has-text-weight-black">I'm <span className="has-text-white">Sean</span><span className="period">.</span></h1>
                <p className="subtitle is-size-4">I love to create</p>
              </div>
              <div className="level">
                <div className="level-left">
                  <div className="level-item text-extrude">
                    <a href="" className="text-extrude-item" data-text="Developer">Developer</a>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item text-extrude">
                    <a href="" className="text-extrude-item" data-text="Musician">Musician</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

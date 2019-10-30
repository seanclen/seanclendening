import React from "react"
import { Link, graphql } from "gatsby"
import anime from "animejs"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  componentDidMount() {
    var preloaderTimeline = anime.timeline({
      duration: 800,
      autoplay: true
    }), landingTimeline = anime.timeline({
      duration: 800,
      autoplay: false
    })

    preloaderTimeline.add({
      targets: '#logoS',
      scale: 0.5,
      opacity: [0, 1],
      delay: 1000
    }).add({
      targets: '#logoPeriod',
      scale: 0.5,
      opacity: [0, 1],
    }, '-=500').add({
      targets: ['#logoS', '#logoPeriod'],
      easing: 'linear',
      scale: 1,
      duration: 200
    }, '-=200').add({
      targets: '#logo',
      translateY: '120px',
      translateX: '-48px',
      rotate: -90,
      scale: 3
    }, '-=200').add({
      targets: '#logoPeriod',
      y: 17,
      height: 14
    }, '-=500').add({
      targets: '#logoHelloCursor',
      opacity: [0,1],
      duration: 200
    }, '-=500').add({
      targets: '#logoHelloText .logoHelloChar',
      delay: function(el, i) { return i * 100; },
      easing: 'steps(5)',
      duration: 100,
      opacity: [0,1]
    }, '-=500').add({
      targets: '#logoHelloCursor',
      easing: 'steps(5)',
      translateY: 10,
      duration: 500
    }, '-=500').add({
      targets: ['#logoHelloCursor', '#logoHelloText .logoHelloChar'],
      opacity: [1, 0],
      duration: 500
    }, '+=500').add({
      targets: '#logoPeriod',
      y: 28,
      height: 7
    }, '-=500').add({
      targets: '#logo',
      translateY: '0px',
      translateX: '0px',
      rotate: 0,
      scale: 1
    }, '-=500')

    landingTimeline.add({
      targets: '.landing-intro .title',
      opacity: [0, 1],
      translateY: ['10rem', '0rem']
    }).add({
      targets: '.landing-intro .subtitle',
      opacity: [0, 1],
      translateY: ['-2rem', '0rem']
    }, '-=250').add({
      targets: '.landing-intro .level-left',
      translateX: [-1000, 0]
    }).add({
      targets: '.landing-intro .level-right',
      translateX: [1000, 0]
    }, '-=500')

    preloaderTimeline.finished.then(() => {
      landingTimeline.play()
    })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={siteTitle} />
        <section className="hero landing-intro is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="is-inline-block">
                <h1 className="title has-text-weight-black">I'm <span className="has-text-white">Sean</span><span className="period">.</span></h1>
                <p className="subtitle is-size-4">I love to create</p>
              </div>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <a href="" data-text="Developer">Developer</a>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <a href="" data-text="Musician">Musician</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <Bio />
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

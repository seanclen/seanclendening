import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Index extends React.Component {

  render() {
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

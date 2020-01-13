import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SplitBubbleContent from "../components/SplitBubbleContent"

import colorVariables from "../assets/sass/variables.scss"

export default class Index extends React.Component {
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
        <SplitBubbleContent bubbles={bubbles} sectionTop={<SectionTop />} sectionBottom={<SectionBottom />} options={splitBubbleContentOptions} />
        <section className="section is-medium" style={{background: colorVariables.cyan}}>
          <div className="container has-text-centered">
            <div className="content">
              <h2 className="title has-text-white">Let's get started!</h2>
              <p className="is-size-4">Have an idea for a new project? Let's talk.</p>
              <button className="button is-large is-white is-outlined m-r-25">check out my work</button>
              <button className="button is-large is-dark is-outlined">shoot me a message</button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
const splitBubbleContentOptions = {
  topColor: colorVariables.yellow,
  bottomColor: "#FFFFFF",
  circleColors: [colorVariables.blue, colorVariables.cyan, "#FFFFFF"]
}

const bubbles = [
  {
    color: colorVariables.cyan,
    size: "34vw",
    left: "40vw",
    top: "50%"
  },
  {
    color: colorVariables.blue,
    size: "21vw",
    left: "25vw",
    top: "60%"
  },
  {
    color: "#FFFFFF",
    size: "8vw",
    left: "30vw",
    top: "30%"
  },
  {
    color: "#FFFFFF",
    size: "8vw",
    left: "68vw",
    top: "55%"
  }
]

const SectionTop = () => (
  <section className="section override-default is-large p-t-100">
    <div className="container has-text-centered">
      <div className="content">
        <h3 className="subtitle">Creative \\ Focused</h3>
        <hr className="brand-period" />
        <h3 className="title">This is what I do</h3>
        <p className="is-size-4">We partner with global brands and emerging businesses to create exciting and meaningful experiences, whether digital or non-digital.</p>
      </div>
    </div>
  </section>
)

const SectionBottom = () => (
  <section className="section override-default is-large">
    <div className="container has-text-centered">
      <div className="content">
        <h2 className="title">Recent Work<span className="period">.</span></h2>
        <button className="button is-large is-dark is-outlined">check out my work</button>
      </div>
    </div>
  </section>
)

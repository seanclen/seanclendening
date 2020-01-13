import React from "react"
import PropTypes from 'prop-types';
import anime from "animejs"

import "../assets/sass/components/splitBubbleContent.sass"

export default class SplitBubbleContent extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)

    var animeTimeline
  }

  componentDidMount() {
    const { bubbles } = this.props

    this.animeTimeline = anime.timeline({ autoplay: false })
    window.addEventListener('scroll', this.handleScroll)

    bubbles.forEach((bubble, i) => {
      this.animeTimeline.add({
        targets: ".bubble" + i,
        translateY: "-125%",
        easing: 'linear',
      }, 0)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
  }

  handleScroll(event) {
    const percentage = this.getScrollPercent()
    this.animeTimeline.seek(this.animeTimeline.duration * (percentage * 0.01))
  }

  render() {
    const { bubbles, sectionTop, sectionBottom, options} = this.props
    const bubbleItems = bubbles.map((bubble, i) => {
      return (
        <svg className={"bubble bubble" + i} key={i} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{
          left: bubble.left,
          top: bubble.top,
          width: bubble.size,
          fill: bubble.color
        }}>
          <circle cx="50" cy="50" r="50"/>
        </svg>
      )
    })

    return (
      <div className="split-bubble-content" style={{ background: options.topColor }}>
        <div style={{ background: options.topColor }}>
          {sectionTop}
        </div>
        <div className="bubble-container">
          {bubbleItems}
        </div>
        <div className="cut-container">
          <svg className="cut" viewBox="0 0 100 10" height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill={options.bottomColor} id="split" points="0 0 100 10 0 10" />
          </svg>
          <svg className="cut-overlay" viewBox="0 0 100 10" height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill={options.bottomColor} id="split" points="0 0 100 10 0 10" />
          </svg>
        </div>

        <div className="bottom-container" style={{ background: options.bottomColor }}>
          <div className="bottom-overlay" style={{ background: options.bottomColor }}></div>
          {sectionBottom}
        </div>
      </div>
    )
  }
}

// TODO complete the PropTypes
SplitBubbleContent.propTypes = {
  circles: PropTypes.object.isRequired,
  options: PropTypes.object,
  sectionTop: PropTypes.object.isRequired,
  sectionBottom: PropTypes.object.isRequired,
}

SplitBubbleContent.defaultProps = {
  options: {
    topColor: "#F2C53D",
    bottomColor: "#FFFFFF",
    circleColors: ["468C7F", "A9D9D9", "#FFFFFF"]
  },

}

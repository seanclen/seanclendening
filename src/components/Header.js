import React from "react"
import Navbar from "./header/Navbar"
import anime from "animejs"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPreloaderDone: false }
  }

  componentDidMount() {
    const rootPath = `${__PATH_PREFIX__}/`
    if (this.props.location.pathname === rootPath) {
      this.animatePreloader()
    }
  }

  animatePreloader() {
    const waitTimeline = anime.timeline({
      autoplay: true
    })

    waitTimeline.add({
      duration: 2000 // wait for preloader to complete
    }).finished.then(() => {
      this.changePreloaderState()
    })
  }

  changePreloaderState() {
    const currentState = this.state.isPreloaderDone
    this.setState({ isPreloaderDone: !currentState })
  }

  render() {
    const rootPath = `${__PATH_PREFIX__}/`
    const showPreloader = this.props.location.pathname === rootPath ? true : false

    return (
      <Navbar hasPreloader={showPreloader} isPreloaderDone={this.state.isPreloaderDone} />
    )
  }
}

export default Header

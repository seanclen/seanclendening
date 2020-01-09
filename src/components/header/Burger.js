import React from "react"

export default class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isBurgerToggled: false }
    this.changeBurgerState = this.changeBurgerState.bind(this)
  }

  changeBurgerState() {
    let state = !this.state.isBurgerToggled
    this.setState({
      isBurgerToggled: state
    })
    this.props.toggled(state)
  }

  render() {
    const isToggledClass = this.state.isBurgerToggled ? " is-active" : ""
    return (
      <a role="button" className={'navbar-burger burger' + isToggledClass} onClick={this.changeBurgerState} aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    )
  }
}

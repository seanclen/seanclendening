import React from "react"

export default class Navigation extends React.Component {
  render() {
    const isActiveClass = this.props.isActive ? "is-active" : ""
    return (
      <div className="nav">
        <div className={"navbar-menu " + isActiveClass}>
          <div className="navbar-start">
            <ul className="nav-items">
              <li><a href="" className="navbar-item">Who</a></li>
              <li><a href="" className="navbar-item">What</a></li>
              <li><a href="" className="navbar-item">Work</a></li>
              <li><a href="" className="navbar-item">Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end is-size-6">
            <p className="subtitle m-b-0 is-size-5"><strong className="has-text-primary">Sean Clendening</strong></p>
            <p>Creating beautiful things from Wilmington, Delaware.</p>
            <hr />
            <p>Have an idea? Reach out!<br /><a href="mailto:hi@seanclendening.com">hi@seanclendening.com</a></p>
          </div>
        </div>
      </div>
    )
  }
}

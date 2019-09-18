import React from "react"
import anime from "animejs"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPreloaderDone: false };
  }

  componentDidMount(){
    var waitTimeline = anime.timeline({
      autoplay: true
    }), navbarTimeline = anime.timeline({
      duration: 500,
      autoplay: false
    })

    waitTimeline.add({
      duration: 4000 // wait for preloader to complete
    })

    navbarTimeline.add({
      duration: 2000 //Wait for landing to complete
    }).add({
      targets: '#main-navigation .navbar-start .navbar-item',
      delay: function(el, i) { return i * 250; },
      opacity: [0,1],
      translateX: ['-100px', '0px']
    }).add({
      targets: '#main-navigation .navbar-end .navbar-item',
      delay: function(el, i) { return i * 250; },
      opacity: [0,1],
      translateX: ['100px', '0px']
    })

    waitTimeline.finished.then(() => {
      this.setState(prevState => ({ isPreloaderDone: !prevState.isPreloaderDone }));
      navbarTimeline.play()
    })


  }

  render() {
    const { isPreloaderDone } = this.state;
    const { data, location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {

    }
    return (
      <nav class="navbar is-spaced is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <figure class={`logo-container ${isPreloaderDone ? "" : " animating"}`}>
            <svg viewBox="0 0 48 48" height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="logoBackground" fill="#242426" x="0" y="0" width="48" height="48"></rect>
                <rect id="logoPeriod" fill="#D9C077" x="31" y="28" width="7" height="7"></rect>
                <g id="logoHelloText">
                  <text class="logoHelloChar" x="38" y="26.5" fill="#242426" transform="rotate(90 40,20)" font-family="monospace" font-size="0.2em">H</text>
                  <text class="logoHelloChar" x="39.95" y="26.5" fill="#242426" transform="rotate(90 40,20)" font-family="monospace" font-size="0.2em">e</text>
                  <text class="logoHelloChar" x="41.9" y="26.5" fill="#242426" transform="rotate(90 40,20)" font-family="monospace" font-size="0.2em">l</text>
                  <text class="logoHelloChar" x="43.85" y="26.5" fill="#242426" transform="rotate(90 40,20)" font-family="monospace" font-size="0.2em">l</text>
                  <text class="logoHelloChar" x="45.8" y="26.5" fill="#242426" transform="rotate(90 40,20)" font-family="monospace" font-size="0.2em">o</text>
                </g>
                <rect id="logoHelloCursor" fill="#242426" x="33" y="18" width="3" height="2"></rect>
                <path d="M25.203,19.226 C24.5429967,18.829998 23.8610035,18.4780015 23.157,18.17 C22.562997,17.9059987 21.8975037,17.6585012 21.1605,17.4275 C20.4234963,17.1964988 19.7030035,17.081 18.999,17.081 C18.4269971,17.081 17.9705017,17.1689991 17.6295,17.345 C17.2884983,17.5210009 17.118,17.8179979 17.118,18.236 C17.118,18.5440015 17.216999,18.796999 17.415,18.995 C17.613001,19.193001 17.8989981,19.3744992 18.273,19.5395 C18.6470019,19.7045008 19.1034973,19.8639992 19.6425,20.018 C20.1815027,20.1720008 20.7919966,20.3589989 21.474,20.579 C22.5520054,20.9090017 23.5254957,21.271998 24.3945,21.668 C25.2635043,22.064002 26.0059969,22.5314973 26.622,23.0705 C27.2380031,23.6095027 27.7109984,24.2639961 28.041,25.034 C28.3710017,25.8040039 28.536,26.7389945 28.536,27.839 C28.536,29.247007 28.2775026,30.4294952 27.7605,31.3865 C27.2434974,32.3435048 26.5615042,33.1079971 25.7145,33.68 C24.8674958,34.2520029 23.9105053,34.6644987 22.8435,34.9175 C21.7764947,35.1705013 20.7040054,35.297 19.626,35.297 C18.7679957,35.297 17.8880045,35.2310007 16.986,35.099 C16.0839955,34.9669993 15.1875045,34.7800012 14.2965,34.538 C13.4054955,34.2959988 12.5475041,34.0100016 11.7225,33.68 C10.8974959,33.3499983 10.1330035,32.9760021 9.429,32.558 L12.201,26.915 C12.9710039,27.3990024 13.7739958,27.8279981 14.61,28.202 C15.3140035,28.5320016 16.1114955,28.8289987 17.0025,29.093 C17.8935045,29.3570013 18.8009954,29.489 19.725,29.489 C20.4290035,29.489 20.9184986,29.3955009 21.1935,29.2085 C21.4685014,29.0214991 21.606,28.7740015 21.606,28.466 C21.606,28.1359984 21.4685014,27.8555012 21.1935,27.6245 C20.9184986,27.3934988 20.5390024,27.1900009 20.055,27.014 C19.5709976,26.8379991 19.0155031,26.6620009 18.3885,26.486 C17.7614969,26.3099991 17.0960035,26.1010012 16.392,25.859 C15.3579948,25.5069982 14.4670037,25.127502 13.719,24.7205 C12.9709963,24.313498 12.3550024,23.8515026 11.871,23.3345 C11.3869976,22.8174974 11.0295012,22.2290033 10.7985,21.569 C10.5674988,20.9089967 10.452,20.1500043 10.452,19.292 C10.452,17.9939935 10.6884976,16.8500049 11.1615,15.86 C11.6345024,14.869995 12.2779959,14.0450033 13.092,13.385 C13.9060041,12.7249967 14.8354948,12.2245017 15.8805,11.8835 C16.9255052,11.5424983 18.0309942,11.372 19.197,11.372 C20.0550043,11.372 20.8909959,11.4544992 21.705,11.6195 C22.5190041,11.7845008 23.3054962,11.9934987 24.0645,12.2465 C24.8235038,12.4995013 25.5329967,12.7744985 26.193,13.0715 C26.8530033,13.3685015 27.4469974,13.6489987 27.975,13.913 L25.203,19.226 Z" id="logoS" fill="#FFFFFF"></path>
              </g>
            </svg>
          </figure>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="main-navigation" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Intro
            </a>
            <a class="navbar-item">
              Who
            </a>
            <a class="navbar-item">
              What
            </a>
            <a class="navbar-item">
              Work
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header

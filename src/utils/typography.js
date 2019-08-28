import Typography from "typography"
import gray from "gray-percentage"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import verticalRhythm from "compass-vertical-rhythm"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Playfair Display", "Georgia", "serif"],
  bodyFontFamily: [
    "Raleway",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  headerColor: "hsla(0,0%,10%,1)",
  bodyColor: "hsla(0,0%,20%,1)",
  headerWeight: 800,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = "#F2AB27"
    const accentColor = "#F2AB27"
    const vr = verticalRhythm({
      baseFontSize: "17px",
      baseLineHeight: "24.65px",
    })
    return {
      body: {
        backgroundColor: "#F2F2F2",
      },
      a: {
        color: linkColor,
        textDecoration: "none",
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, ${linkColor} 0px, ${linkColor} 1px, rgba(0, 0, 0, 0) 1px)`, // eslint-disable-line
      },
      "a:hover,a:active": {
        backgroundImage: "none",
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      "h1 > a": {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, ${accentColor} 0px, ${accentColor} 45%, rgba(0, 0, 0, 0) 45%)`, // eslint-disable-line
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${accentColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: "italic",
        marginLeft: 0,
        marginRight: 0,
      },
      "blockquote > :last-child": {
        marginBottom: 0,
      },
      "blockquote cite": {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: "normal",
        fontWeight: options.bodyWeight,
      },
      "blockquote cite:before": {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: "italic",
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    }
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

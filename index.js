const backgroundColor = '#fdf6e3'
const foregroundColor = '#839496'
const cursorColor = 'rgba(211, 54, 130, 0.6)'
const borderColor = 'rgba(38, 139, 210, 0.3)'

const colors = {
  black: '#fdf6e3', // black
  red: '#dc322f', // red
  green: '#859900', // green
  yellow: '#b58900', // yellow
  blue: '#268bd2', // blue
  magenta: '#6c71c4', // violet
  cyan: '#2aa198', // cyan
  white: '#657b83', // light gray
  lightBlack: '#586e75', // medium gray
  lightRed: '#dc322f', // red
  lightGreen: '#859900', // green
  lightYellow: '#b58900', // yellow
  lightBlue: '#268bd2', // blue
  lightMagenta: '#6c71c4', // violet
  lightCyan: '#2aa198', // cyan
  lightWhite: '#ffffff' // white
}

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
      }
      .hyperterm_main {
      	border: transparent !important;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        border: transparent !important;
        color: ${foregroundColor} !important;
        background-color: #e6dfcb;
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .tab_tab.tab_active:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
        border-bottom: none !important;
        font-weight: bold;
      }
      .tabs_nav {
      	background-color: #e6dfcb !important;
      }
      .tabs_borderShim {
      	border: transparent;
      }
      .splitpane_divider {
      	background-color: #e6dfcb !important;
      }
      .header_shape
      {
        color: #657b83;
      }
      .header_appTitle
      {
        color: #657b83;
      }
    `
  })
}


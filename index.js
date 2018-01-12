const backgroundColor = '#fdf6e3'
const foregroundColor = '#839496'
const cursorColor = 'rgba(211, 54, 130, 0.6)'
const borderColor = 'rgba(38, 139, 210, 0.3)'

const colors = {
  black: '#fdf6e3', // black
  red: '#DC322F', // red
  green: '#859900', // green
  yellow: '#B58900', // yellow
  blue: '#268BD2', // blue
  magenta: '#D33682', // violet
  cyan: '#2AA198', // cyan
  white: '#073642', // light gray
  lightBlack: '#FDF6E3', // medium gray
  lightRed: '#CB4B16', // red
  lightGreen: '#93A1A1', // green
  lightYellow: '#839496', // yellow
  lightBlue: '#657B83', // blue
  lightMagenta: '#6C71C4', // violet
  lightCyan: '#586E75', // cyan
  lightWhite: '#002B36' // white
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


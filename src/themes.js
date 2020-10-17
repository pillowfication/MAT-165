import { createMuiTheme } from '@material-ui/core/styles'
import { lighten, fade } from '@material-ui/core/styles/colorManipulator'

const PRIMARY_COLOR = '#0f3d87'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: lighten(PRIMARY_COLOR, 0.5),
      main: PRIMARY_COLOR,
      dark: '#082554'
    },
    background: {
      default: '#ffffff'
    },
    action: {
      hover: fade(PRIMARY_COLOR, 0.15)
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Times New Roman", serif',
    h1: {
      fontSize: '3rem'
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 600
    }
  }
})

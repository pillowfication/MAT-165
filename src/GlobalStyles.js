import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    'html, body, main': {
      '@media print': {
        margin: '0 !important',
        padding: '0 !important'
      }
    },
    b: {
      fontWeight: 'bold !important'
    },
    code: {
      fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
      'pre &': {
        fontSize: '1.125em'
      }
    },
    hr: {
      '@media print': {
        visibility: 'hidden',
        pageBreakAfter: 'always'
      }
    },
    img: {
      maxWidth: '100%'
    }
  }
}))

const GlobalStyles = () => {
  useStyles()
  return null
}

export default GlobalStyles

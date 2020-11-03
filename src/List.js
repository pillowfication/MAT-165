import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    counterReset: 'list',
    marginLeft: ({ adjust }) => `${1.5 + adjust}rem`,
    '& > li': {
      listStyle: 'none',
      position: 'relative'
    },
    '& > li::before': {
      display: 'block',
      position: 'relative',
      left: ({ adjust }) => `-${1.75 + adjust}rem`,
      width: 0,
      height: 0,
      counterIncrement: 'list',
      content: ({ counter }) => counter,
      //
      fontSize: '1.1428571428571428rem',
      fontFamily: '"Times New Roman", serif',
      fontWeight: '400',
      lineHeight: '1.5'
    }
  }
}))

const List = ({ counter = '"(" counter(list, lower-alpha) ") "', adjust = 0, children }) => {
  const classes = useStyles({ counter, adjust })

  return (
    <ol className={classes.root}>
      {children}
    </ol>
  )
}

export default List

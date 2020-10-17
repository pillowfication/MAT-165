import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    counterReset: 'list',
    marginLeft: '1.5rem',
    '& > li': {
      listStyle: 'none',
      position: 'relative'
    },
    '& > li::before': {
      display: 'block',
      position: 'relative',
      left: '-1.75rem',
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

const List = ({ counter = '"(" counter(list, lower-alpha) ") "', children }) => {
  const classes = useStyles({ counter })

  return (
    <ol className={classes.root}>
      {children}
    </ol>
  )
}

export default List

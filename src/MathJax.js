/* global MathJax */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AirbnbPropTypes from 'airbnb-prop-types'

const setImmediatePolyfill = typeof setImmediate !== 'undefined'
  ? setImmediate
  : (action) => setTimeout(action, 100)

let calledRender = false
function queueRenderMath () {
  if (typeof MathJax !== 'undefined' && !calledRender) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub])
    calledRender = true
    setImmediatePolyfill(() => {
      calledRender = false
    })
  }
}

const useStyles = makeStyles((theme) => ({
  mathJaxBlock: {
    maxWidth: '100%',
    overflowX: 'auto',
    fontSize: '1.125em'
  }
}))

// TODO: SSR still not happy
const MathJaxComponent = ({ $, $$ }) => {
  const [isMounted, setIsMounted] = useState(false)
  const classes = useStyles()
  useEffect(() => { isMounted && queueRenderMath() }, [isMounted, $, $$])
  useEffect(() => { setIsMounted(true) }, [])

  return (
    $$
      ? <div className={classes.mathJaxBlock}>{`\\[${$$}\\]`}</div>
      : `\\(${$}\\)`
  )
}

const exclusivePropTypes = {
  $: PropTypes.string,
  $$: PropTypes.string
}
const exclusiveProps = Object.keys(exclusivePropTypes)

MathJaxComponent.propTypes = {
  ...Object.fromEntries(exclusiveProps.map(exclusiveProp => [
    exclusiveProp,
    AirbnbPropTypes.and([
      exclusivePropTypes[exclusiveProp],
      (props, propName, componentName) => {
        const propList = exclusiveProps.join(', ')
        const exclusivePropCount = Object.keys(props)
          .filter(prop => props[prop] != null)
          .reduce((count, prop) => (count + (exclusivePropTypes[prop] ? 1 : 0)), 0)
        if (exclusivePropCount > 1) {
          return new Error(`A ${componentName} cannot have more than one of these props: ${propList}`)
        }
        if (exclusivePropCount < 1) {
          return new Error(`A ${componentName} must have at least one of these props: ${propList}`)
        }
      }
    ])
  ]))
}

export default MathJaxComponent

export const $ = (math) => <MathJaxComponent $={math} />
export const $$ = (math) => <MathJaxComponent $$={math} />

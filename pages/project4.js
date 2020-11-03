import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import { $, $$ } from '../src/MathJax'

const Project4 = () => {
  return (
    <Page>
      {$('\\require{enclose}')}

      <Typography variant='h5' paragraph>1.</Typography>
      <List counter='"1." counter(list, lower-alpha) "."' adjust={1}>
        <li>
          <Typography paragraph><b>grlex</b><br />{$('r = x^7+x^3-y+1')}</Typography>
          <img src='p4_1a1.png' width={400} />
          <Typography paragraph><b>lex</b><br />{$('r = 2y^3-y+1')}</Typography>
          <img src='p4_1a2.png' width={700} />
        </li>
        <li>
          <Typography paragraph><b>grlex</b><br />{$('r = x^7+x^3-y+1')}</Typography>
          <img src='p4_1b1.png' width={450} />
          <Typography paragraph><b>lex</b><br />{$('r = y^{23}+y^{11}-y+1')}</Typography>
          <img src='p4_1b2.png' width={600} />
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>2.</Typography>
      <List counter='"2.a."' adjust={1}>
        <li>
          <Typography paragraph>{$('r = z')}</Typography>
          <img src='p4_2.png' width={700} />
        </li>
      </List>
    </Page>
  )
}

export default Project4

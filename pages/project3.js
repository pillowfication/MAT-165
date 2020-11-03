import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import { $, $$ } from '../src/MathJax'

const Project3 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>1.</Typography>
      <ul>
        <li><Typography paragraph>{$('\\text{1.1}')}: Polynomials as a formal ring over an arbitrary field. They also define functions.</Typography></li>
        <li><Typography paragraph>{$('\\text{1.2}')}: Definition of an affine variety. Lots and lots of examples. What about consistency, finiteness, dimension?</Typography></li>
        <li><Typography paragraph>{$('\\text{1.3}')}: Parameterization and Implicitization of affine varieties. Something about my favorite Bezier curves.</Typography></li>
        <li><Typography>{$('\\text{1.4}')}: Definition of an ideal and their bases. How ideals relate to affine varieties.</Typography>{$$('f_1,\\ldots,f_s \\to \\mathbf{V}(f_1,\\ldots,f_s) \\to \\mathbf{I}(\\mathbf{V}(f_1,\\ldots,f_s))')}</li>
        <li><Typography paragraph>{$('\\text{1.5}')}: The division and Euclidean algorithm abstracted and applied to polynomials of a single variable.</Typography></li>
      </ul>
      <hr />

      <Typography variant='h5' paragraph>2.</Typography>
      <List>
        <li>
          <Typography paragraph>Using Maple to factor the polynomial, we see that the square-free part is {$('(x+1)(x^3+x+1)(x-1) = x^5+x^2-x-1')}.</Typography>
          <img src='p3_2a.png' />
        </li>
        <li>
          <Typography paragraph>Exercise {$('\\text{1.5.15}')} shows that the square-free part is also given by.</Typography>
          {$$('f_\\text{red} = \\frac{f}{\\operatorname{GCD}(f, f\')} = x^5+x^2-x-1')}
          <img src='p3_2b.png' />
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>3.</Typography>
      <Typography>For each {$('f_1, \\ldots, f_s')}, compute</Typography>
      {$$('g_i = \\frac{f_i}{\\operatorname{GCD}(f_i, f_i\')}')}
      <Typography paragraph>(by applying the Euclidean algorithm followed by the division algorithm). Then {$('\\langle g_1, \\ldots, g_s \\rangle')} is a basis.</Typography>
      <hr />

      <Typography variant='h5' paragraph>4.</Typography>
      <List counter='"1.a."' adjust={1}>
        <li>
          <Typography paragraph>{$('x^2-3x+2 = (x-1)(x-2) + 0')}. Thus {$('f(x) \\in I')}.</Typography>
        </li>
      </List>
      <List counter='"1.d."' adjust={1}>
        <li>
          <Typography paragraph>Note that {$('\\gcd(x^9-1, x^5+x^3-x^2-1) = x^3-1')}, so {$('I = \\langle x^3-1 \\rangle')}, and {$('f(x) \\in I')}.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>5.</Typography>
      <List counter='"2.a."' adjust={1}>
        <li>
          <Typography>Placing the system into reduced row echelon form gives</Typography>
          {$$(`
            \\begin{pmatrix}
              1 & 0 & -\\frac15 & \\frac{12}{5} \\\\
              0 & 1 & -\\frac15 & \\frac75 \\\\
              0 & 0 & 0 & 0
            \\end{pmatrix}
          `)}
          <Typography>which gives the parameterization</Typography>
          {$$(`
            \\begin{align}
              x & = \\tfrac{12}{5} + \\tfrac15t \\\\
              y & = \\tfrac75 + \\tfrac15t \\\\
              z & = t.
            \\end{align}
          `)}
        </li>
      </List>
      <List counter='"2.c."' adjust={1}>
        <li>
          {$$(`
            \\begin{align}
              x & = t \\\\
              y & = t^3 \\\\
              z & = t^5.
            \\end{align}
          `)}
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>6.</Typography>
      <List counter='"3." counter(list, lower-alpha) "."' adjust={1}>
        <li>
          {$$(`
            \\begin{pmatrix}
              1 & -1 & 0 & 0 & 5 \\\\
              2 & 0 & -1 & 0 & -1 \\\\
              -1 & 0 & 0 & -1 & -6
            \\end{pmatrix}
            \\xrightarrow{\\text{rref}}
            \\begin{pmatrix}
              1 & 0 & 0 & 1 & 6 \\\\
              0 & 1 & 0 & 1 & 1 \\\\
              0 & 0 & 1 & 2 & 13
            \\end{pmatrix}
            \\\\\\phantom{0}\\\\
            \\begin{align}
              x_1 + x_3 - 1 & = 0, \\\\
              x_2 + 2x_3 - 13 & = 0.
            \\end{align}
          `)}
        </li>
        <li>
          {$$(`
            \\begin{pmatrix}
              2 & -5 & -1 & 0 & 0 & 0 & 0 \\\\
              1 & 2 & 0 & -1 & 0 & 0 & 0 \\\\
              -1 & 1 & 0 & 0 & -1 & 0 & 0 \\\\
              1 & 3 & 0 & 0 & 0 & -1 & 0
            \\end{pmatrix}
            \\xrightarrow{\\text{rref}}
            \\begin{pmatrix}
              1 & 0 & 0 & 0 & \\frac34 & -\\frac14 & 0 \\\\
              0 & 1 & 0 & 0 & -\\frac14 & -\\frac14 & 0 \\\\
              0 & 0 & 1 & 0 & \\frac{11}{4} & \\frac34 & 0 \\\\
              0 & 0 & 0 & 1 & \\frac14 & -\\frac34 & 0
            \\end{pmatrix}
            \\\\\\phantom{0}\\\\
            \\begin{align}
              x_1 + \\tfrac{11}{4}x_3 + \\tfrac34x_4 & = 0, \\\\
              x_2 + \\tfrac14x_3 - \\tfrac34x_4 & = 0.
            \\end{align}
          `)}
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>7.</Typography>
      <List counter='"1.a."' adjust={1}>
        <li>
          {$$(`
            \\begin{array}{l|cccc}
              & f & \\operatorname{LM}(f) & \\operatorname{LT}(f) & \\operatorname{multideg}(f) \\\\
              \\hline
              \\text{lex} & x^3+x^2+2x+3y-z^2+z & x^3 & x^3 & (3,0,0) \\\\
              \\text{grlex} & x^3+x^2-z^2+2x+3y+z & x^3 & x^3 & (3,0,0) \\\\
              \\text{grevlex} & x^3+x^2-z^2+2x+3y+z & x^3 & x^3 & (3,0,0)
            \\end{array}
          `)}
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>8.</Typography>
      <List counter='"2.b."' adjust={1}>
        <li>
          <Typography>{$('\\text{grevlex}')} order.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>9.</Typography>
      <List counter='"3.b."' adjust={1}>
        <li>
          <Typography>{$('f(x) = zy^3x+z^2y^2x+z^3x^2')}. None of the three orders.</Typography>
        </li>
      </List>
      <hr />
    </Page>
  )
}

export default Project3

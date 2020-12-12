import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import { $, $$ } from '../src/MathJax'

const Project7 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>1.</Typography>
      <List counter='"4.1.1"' adjust={1.3}>
        <li>
          <List counter='counter(list, lower-alpha) "."'>
            <li>
              <Typography paragraph>Let {$('f = y-x^2')} and {$('g = z-x^3')}. Then any point satisfying {$('f(\\mathbf{x}) = g(\\mathbf{x}) = 0')} also satisfies {$('[f(\\mathbf{x})]^2 + [g(\\mathbf{x})]^2 = 0')}, which means {$('\\mathbf{V}(f, g) \\subseteq \\mathbf{V}(f^2+g^2)')}.</Typography>
              <Typography paragraph>Now suppose a point satisfies {$('[f^2+g^2](\\mathbf{x}) = 0')}. Since {$('f^2, g^2 \\geq 0')}, it must be that {$('f(\\mathbf{x}) = g(\\mathbf{x}) = 0')}, and therefore {$('\\mathbf{V}(f^2+g^2) \\subseteq \\mathbf{V}(f, g)')}</Typography>
            </li>
            <li>
              <Typography>Any variety {$('\\mathbf{V}(I)')} is equivalent to</Typography>
              {$$(`
                \\begin{align}
                  \\mathbf{V}(I)
                  & = \\mathbf{V}(\\langle f_1, f_2, \\ldots, f_n \\rangle) && \\text{Hilbert Basis Theorem} \\\\
                  & = \\mathbf{V}(f_1, f_2, \\ldots, f_n) \\\\
                  & = \\mathbf{V}\\left(\\sum_{i=1}^n f_i^2\\right). && \\text{part (a)} \\\\
                \\end{align}
              `)}
            </li>
          </List>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>2.</Typography>
      <List counter='"4.1.2"' adjust={1.3}>
        <li>
          <Typography>The variety {$('\\mathbf{V}(J)')} is the intersection of the unit circle with the line {$('y = 1')}, so it consists of single point {$('(0, 1)')}. Thus the polynomial {$('f = x')} is in {$('\\mathbf{I}(\\mathbf{V}(J))')}, but it is not an element of {$('J')} as seen by the Gröbner basis</Typography>
          {$$(`
            J = \\langle y-1, x^2 \\rangle.
          `)}
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>3.</Typography>
      <List counter='"4.1.10"' adjust={1.75}>
        <li>
          <Typography paragraph>Clearly {$('f^2 + g^2 \\in \\langle f, g \\rangle')}, so {$('\\langle f^2 + g^2 \\rangle \\subseteq \\langle f, g \\rangle')}.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>4.</Typography>
      <Typography paragraph>Let {$('f \\in \\sqrt{\\langle x^2, y^2 \\rangle}')}. Suppose that {$('f \\not\\in \\langle x, y \\rangle')}. Then {$('f')} is either a constant polynomial, or a non-constant polynomial of another variable {$('z')}. Thus all powers of {$('f')} are likewise constant or a non-constant polynomial of {$('z')}. This contradicts {$('f')} being in {$('\\sqrt{\\langle x^2, y^2 \\rangle}')}.</Typography>
      <Typography>Let {$('g \\in \\langle x, y \\rangle')}. By definition, {$('g = px + qy')} for some polynomials {$('p, q')}. Thus</Typography>
      {$$(`
        \\begin{align}
          g^3
          & = p^3x^3 + 3p^2x^2qy + 3pxq^2y^2 + q^3y^3 \\\\
          & = (p^3x + 3p^2qy)x^2 + (3pxq^2 + q^3y)y^2 \\\\
          & \\in \\langle x^2, y^2 \\rangle,
        \\end{align}
      `)}
      <Typography paragraph>and {$('g \\in \\sqrt{\\langle x^2, y^2 \\rangle}')}.</Typography>
      <hr />

      <Typography variant='h5' paragraph>5.</Typography>
      <List counter='"4.2.3"' adjust={1.3}>
        <li>
          <Typography paragraph>Let {$('f')} be a polynomial such that {$('f^m \\in \\langle x^2+1 \\rangle')} for some integer {$('m')}. Let {$('f = \\prod q_k^{a_k}')} be the factorization of {$('f')} into irreducibles. Then {$('f^m = \\prod q_k^{m \\cdot a_k}')}. Since {$('f^m \\in \\langle x^2+1 \\rangle')} and {$('x^2+1')} is irreducible, this means that some {$('q_i = x^2+1')}. Therefore {$('f \\in \\langle x^2+1 \\rangle')}, and {$('\\langle x^2+1 \\rangle')} is a radical ideal.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>6.</Typography>
      <List counter='"4.2.7"' adjust={1.3}>
        <li>
          <List counter='counter(list, lower-alpha) "."'>
            <li>
              <Typography>Yes, and the smallest power is {$('3')}</Typography>
              {$$(`
                \\begin{align}
                  (x+y)^3
                  & = x^3 + 3x^2y + 3xy^2 + y^3 \\\\
                  & = x^3 + y^3 + 3\\left[xy(x+y)\\right] \\\\
                  & \\in \\langle x^3, y^3, xy(x+y) \\rangle.
                \\end{align}
              `)}
            </li>
          </List>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>7.</Typography>
      <List counter='"4.2.11"' adjust={1.75}>
        <li>
          {$$(`
            \\begin{align}
              & \\sqrt{\\left\\langle x^5-2x^4+2x^2-x, x^5-x^4-2x^3+2x^2+x-1 \\right\\rangle} \\\\
              = & \\sqrt{\\left\\langle\\gcd(x^5-2x^4+2x^2-x, x^5-x^4-2x^3+2x^2+x-1)\\right\\rangle} \\\\
              = & \\sqrt{\\left\\langle (x-1)^3(x+1) \\right\\rangle} \\\\
              = & \\left\\langle (x-1)(x+1) \\right\\rangle.
            \\end{align}
          `)}
          <Typography paragraph>Thus a basis is {$('\\{(x-1)(x+1)\\} = \\{x^2-1\\}')}.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>8.</Typography>
      <List counter='"4.2.12"' adjust={1.75}>
        <li>
          hi
        </li>
      </List>
    </Page>
  )
}

export default Project7

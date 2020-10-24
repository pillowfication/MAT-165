import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import Highlight from '../src/Highlight'
import { $, $$ } from '../src/MathJax'

const Project2 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>1.</Typography>
      <Typography paragraph>
        The zero polynomial is a specific element of {$('k[x]')} where all the coefficients are {$('0')}. A zero function is not a plain polynomial, but a function that evaluates to {$('0')} everywhere.
      </Typography>
      <Typography paragraph>
        Let {$('k = \\{0, 1\\}')}. Then {$('p = x^2 - x \\in k[x]')} is <em>not</em> the zero polynomial. Now consider the function {$('f : k \\to k')} defined by evaluating the polynomial {$('p')}. Then {$('f(x) = 0')} for all {$('x \\in k')}, and {$('f')} is the zero function.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>2.</Typography>
      <Highlight language='plaintext'>
        {`
> mygcd := proc(a, b)
    if a < b then return mygcd(b, a); end if;
    if b = 0 then return a; end if;
    return mygcd(a - b, b);
  end proc;
> mygcd3 := proc(a, b, c)
    mygcd(mygcd(a, b), c);
  end proc;
        `.trim()}
      </Highlight>
      <img src='p2_2.png' />
      <hr />

      <Typography variant='h5' paragraph>3.</Typography>
      <Typography>
        When a polynomial {$('f')} is divided by {$('x - a')}, the remainder is a constant {$('c')}. If {$('a')} is a root, plugging it into {$('f = q(x-a) + c')} implies {$('c = 0')}. Let {$('a_i')} for {$('1 \\leq i \\leq n')} be the {$('n')} roots of {$('f')}. Then by dividing by every {$('x - a_i')},
      </Typography>
      {$$(`
        f = q \\cdot \\prod_{i=1}^n (x-a_i)
      `)}
      <Typography paragraph>
        where {$('q')} is a polynomial of degree {$('\\operatorname{deg}(f) - n')}. It follows that {$('n \\leq \\operatorname{deg}(f)')}.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>4.</Typography>
      <img src='p2_4.png' />
      <Typography paragraph>
        This variety has symmetry about the {$('x')}-axis.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>5.</Typography>
      <Typography paragraph>
        The polynomial {$('xz^2 - xy = x(z^2 - y)')} is zero when {$('x=0')} or {$('y=z^2')}. This gives us the {$('yz')}-plane, and a {$('y=z^2')} parabola on that plane that stretches out infinitely perpendicular to it.
      </Typography>
      <img src='p2_5.png' />
      <Typography>(Plotted with WolframAlpha)</Typography>
      <hr />

      <Typography variant='h5' paragraph>6.</Typography>
      <hr />

      <Typography variant='h5' paragraph>7.</Typography>
      <List>
        <li>
          <img src='p2_7a.png' />
        </li>
        <li>
          <Typography paragraph>3 variables will be required to describe the orientations of each of the 3 arms which are independent of each other.</Typography>
        </li>
        <li>c</li>
        <li>
          <Typography paragraph>The variety would be 3-dimensional, since it requires 3 variables to describe.</Typography>
        </li>
        <li>
          <Typography paragraph>The maximum distance the arm can extend from the origin is {$('3+2+1=6')}, which means {$('u^2+v^2 \\leq 6^2')}.</Typography>
        </li>
        <li>
          <Typography paragraph>Yes. The arm can take on the radius {$('r = 0')} by folding the two smaller arms back on the longest arm. It can also take on {$('r = 6')} by fully extending the arm. Thus all values {$('0 \\leq r \\leq 6')} can be achieved, then the arm simply needs to pivot about the origin into place.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>8.</Typography>
      <Typography>
        Putting the system into reduced row-echelon form gives us
      </Typography>
      {$$(`
        \\begin{array}{rrrrl}
          x & & +4z & -3w & = 5, \\\\
          & y & -3z & +2w & = -3,
        \\end{array}
      `)}
      <Typography>
        which gives the parameterization
      </Typography>
      {$$(`
        \\begin{align}
          x & = 5 -4s +3t, \\\\
          y & = -3 +3s -2t, \\\\
          z & = s, \\\\
          w & = t,
        \\end{align}
      `)}
      <Typography paragraph>
        for all {$('s,t \\in \\Bbb{R}')}.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>9.</Typography>
      <Typography>
        Let {$('x, y')} be parameterized by {$('s \\in \\Bbb{R}')} such that
      </Typography>
      {$$(`
        \\begin{align}
          x & = s, \\\\
          y & = f(s).
        \\end{align}
      `)}
      <hr />

      <Typography variant='h5' paragraph>10.</Typography>
      <hr />

      <Typography variant='h5' paragraph>11.</Typography>
      <hr />

      <Typography variant='h5' paragraph>12.</Typography>
      <List>
        <li>
          <Typography>Solving for {$('y')} in the 2nd equation gives</Typography>
          {$$(`
            y = \\frac1x.
          `)}
          <Typography>Plugging it into the 1st equation gives</Typography>
          {$$(`
            x^2 + \\frac{1}{x^2} - 1 = 0.
          `)}
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>13.</Typography>
      <Typography paragraph>
        Suppose {$('f_i \\in I')}. Let {$('p \\in \\langle f_1, \\ldots, f_s \\rangle')}. This means there exist polynomials {$('g_i \\in k[x_1, \\ldots, x_n]')} such that {$('p = g_1f_1 + \\cdots g_sf_s')}. By closure of an ideal, {$('p \\in I')} and {$('\\langle f_1, \\ldots, f_s \\rangle \\subseteq I')}.
      </Typography>
      <Typography paragraph>
        Suppose {$('\\langle f_1, \\ldots, f_s \\rangle \\subseteq I')}. Then {$('f_i \\in \\langle f_1, \\ldots, f_s \\rangle')} and {$('f_i \\in I')}.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>14.</Typography>
      <img src='p2_14.png' />
      <hr />

      <Typography variant='h5' paragraph>15.</Typography>
      <Typography>
        Let the {$('3')} polynomials be {$('p, q, r')}. Since {$('\\gcd(p, q, r) = x - 2')}, there exist polynomials {$('a, b, c')} such that
      </Typography>
      {$$(`
        ap + bq + cr = x - 2.
      `)}
      <Typography>
        Multiplying both sides by {$('x+2')} gives us
      </Typography>
      {$$(`
        a(x+2) \\cdot p + b(x+2) \\cdot q + c(x+2) \\cdot r = x^2 - 4,
      `)}
      <Typography paragraph>
        which means {$('x^2 - 4')} is in the ideal.
      </Typography>
    </Page>
  )
}

export default Project2

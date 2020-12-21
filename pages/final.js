import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Link from '@material-ui/core/Link'
import Page from '../src/Page'
import Section from '../src/Section'
import List from '../src/List'
import Highlight from '../src/Highlight'
import { $, $$ } from '../src/MathJax'

const useStyles = makeStyles((theme) => ({
  '@global': {
    'html, body, main': {
      fontSize: 14
    }
  },
  toc: {
    '& tr, & td': {
      border: 'none',
      fontWeight: 'bold !important'
    }
  }
}))

const Final = () => {
  const classes = useStyles()

  return (
    <Page>
      <div style={{ textAlign: 'center', paddingTop: '7em' }}>
        <Typography variant='h4'>Automatic Geometric Theorem Proving</Typography>
        <Typography variant='h6'>Markus Tran</Typography>
      </div>
      <hr />
      <Section title='Contents'>
        <Table size='small' className={classes.toc}>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>1. Introduction</Typography>
              </TableCell>
              <TableCell>
                <Typography>3</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>2. Geometric Statements as Polynomials</Typography>
              </TableCell>
              <TableCell>
                <Typography>3</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>3. Orthocenter Theorem</Typography>
              </TableCell>
              <TableCell>
                <Typography>5</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>4. Centroid Theorem</Typography>
              </TableCell>
              <TableCell>
                <Typography>8</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>5. Exploration</Typography>
              </TableCell>
              <TableCell>
                <Typography>9</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>6. References</Typography>
              </TableCell>
              <TableCell>
                <Typography>10</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
      <hr />

      <Section title='1. Introduction'>
        <Typography paragraph>Doing mathematics often requires a “touch of intuition” which is thought to be uniquely human. We are able to reason about mathematical problems, and progress forwards towards a reasonable solution. On the contrary, computer machines are confined to their own rigid system of rules, and can only make deductions “within a system”, which often isn’t sufficient for general problems which require “out of the box” thinking. This difference seems to create an impenetrable wall between human and computer thought.</Typography>
        <Typography paragraph>In <i>Gödel, Escher, Bach</i>, Douglas Hofstadter presents the MU puzzle to highlight the difference between modes of thought. The goal of the puzzle is to begin with the string {$('\\text{MI}')} and construct the string {$('\\text{MU}')} by applying any of the four formal rules any number of times. There is no solution, but to a robot operating in the “Mechanical Mode,” will only be able to apply rule after rule hoping that {$('\\text{MU}')} will be reached in time. But a human can operate in the “Intelligent Mode” and make deductions <i>about</i> the puzzle to conclude that {$('\\text{MU}')} is impossible. Gödel takes it a step further and concludes in his Incompleteness Theorems that any such formal system, no matter how complex, is subject a similar flaw. There will always be {$('\\text{MU}')}-like theorems that a robot simply cannot solve, but humans can solve by somehow reasoning about the <i>meaning</i> of purely mathematical statements (e.g. the Gödel sentence).</Typography>
        <Typography paragraph>Still, the use of computers in mathematics is far from futile. Computers are still able to solve a wide variety of problems, and in 1976, computers were able to solve the infamous Four color theorem (despite controversy revolving around the usefulness of such a proof). It is interesting to consider problems that computers are able to provide insight to. One such field is geometry. I’ve previously attempted to use a program to check for the existence of a perfect cuboid (<Link href='https://pf-n.co/blog/perfect-cuboid'>https://pf-n.co/blog/perfect-cuboid</Link>), so this area of research interests me and hopefully will provide me with a deeper understanding of computer-assisted proofs.</Typography>
      </Section>

      <Section title='2. Geometric Statements as Polynomials'>
        <Typography paragraph>Automatic Geometric Theorem Proving begins with a translations of geometric statements into a system of polynomial equations. A statement such as {$('\\text{“$\\overline{AB}$ is parallel to $\\overline{CD}$”}')} asserts some numerical relationship between the coordinates of the points {$('A, B, C, D')}. After translating a geometric question into polynomial equations, we can use theorems we’ve studied to analyze the relationship between a given conclusion and several hypotheses. Several translations are given in this section for general points on a plane.</Typography>
        <List counter='"(i)"' adjust={1}>
          <li>
            <Typography>{$('\\overline{AB}')} is parallel to {$('\\overline{CD}')}</Typography>
          </li>
        </List>
        {$$(`
          \\frac{B_y-A_y}{B_x-A_x} = \\frac{D_y-C_y}{D_x-C_x} \\implies \\\\
          B_yD_x-B_yC_x-A_yD_x+A_yC_x-B_xD_y+B_xC_y+A_xD_y-A_xC_y = 0
        `)}
        <List counter='"(ii)"' adjust={1}>
          <li>
            <Typography>{$('\\overline{AB}')} is perpendicular to {$('\\overline{CD}')}</Typography>
          </li>
        </List>
        {$$(`
          \\frac{B_y-A_y}{B_x-A_x} = -\\frac{D_x-C_x}{D_y-C_y} \\implies \\\\
          B_yD_y-B_yC_y-A_yD_y+A_yC_y+D_xB_x-D_xA_x-C_xB_x+C_xA_x = 0
        `)}
        <List counter='"(iii)"' adjust={1}>
          <li>
            <Typography>{$('A, B, C')} are collinear</Typography>
          </li>
        </List>
        {$$(`
          \\overline{AB} \\parallel \\overline{AC} \\implies
          \\\\
          \\begin{align}
            B_yC_x-B_yA_x-A_yC_x+A_yA_x-B_xC_y+B_xA_y+A_xC_y-A_xA_y & = 0 & \\implies \\\\
            B_yC_x-B_yA_x-A_yC_x-B_xC_y+B_xA_y+A_xC_y & = 0
          \\end{align}
        `)}
        <List counter='"(iv)"' adjust={1}>
          <li>
            <Typography>The distance from {$('A')} to {$('B')} is equal to the distance from {$('C')} to {$('D')}: {$('AB = CD')}</Typography>
          </li>
        </List>
        {$$(`
          (B_x-A_x)^2+(B_y-A_y)^2 = (D_x-C_x)^2+(D_y-C_y)^2 \\implies \\\\
          B_x^2-2B_xA_x+A_x^2+B_y^2-2B_yA_y+A_y^2-D_x^2+2D_xC_x-C_x^2-D_y^2+2D_yC_y-C_y^2 = 0
        `)}
        <List counter='"(v)"' adjust={1}>
          <li>
            <Typography>The cross ratio of {$('(A, B, C, D)')} is equal to {$('\\rho \\in \\Bbb{R}')}</Typography>
          </li>
        </List>
        <div style={{ fontSize: '85%' }}>
          {$$(`
            \\begin{align}
              \\frac{\\sqrt{(C_x-A_x)^2+(C_y-A_y)^2}\\cdot\\sqrt{(D_x-B_x)^2+(D_y-B_y)^2}}{\\sqrt{(D_x-A_x)^2+(D_y-A_y)^2}\\cdot\\sqrt{(C_x-B_x)^2+(C_y-B_y)^2}} & = \\rho & \\implies \\\\
              \\frac{\\left(C_x^2-2C_xA_x+A_x^2+C_y^2-2C_yA_y+A_y^2\\right)\\cdot\\left(D_x^2-2D_xB_x+B_x^2+D_y^2-2D_yB_y+B_y^2\\right)}{\\left(D_x^2-2D_xA_x+A_x^2+D_y^2-2D_yA_y+A_y^2\\right)\\cdot\\left(C_x^2-2C_xB_x+B_x^2+C_y^2-2C_yB_y+B_y^2\\right)} & = \\rho^2 & \\implies \\\\
            \\end{align}
          `)}
        </div>
        <div style={{ fontSize: '70%' }}>
          {$$(`
            \\left(
              \\begin{array}{crcrcrcrcrcr}
                & C_x^2D_x^2 & - & 2C_x^2D_xB_x & + & C_x^2B_x^2 & + & C_x^2D_y^2 & - & 2C_x^2D_yB_y & + & C_x^2B_y^2 \\\\
                - & 2C_xA_xD_x^2 & + & 4C_xA_xD_xB_x & - & 2C_xA_xB_x^2 & - & 2C_xA_xD_y^2 & + & 4C_xA_xD_yB_y & - & 2C_xA_xB_y^2 \\\\
                + & A_x^2D_x^2 & - & 2A_x^2D_xB_x & + & A_x^2B_x^2 & + & A_x^2D_y^2 & - & 2A_x^2D_yB_y & + & A_x^2B_y^2 \\\\
                + & C_y^2D_x^2 & - & 2C_y^2D_xB_x & + & C_y^2B_x^2 & + & C_y^2D_y^2 & - & 2C_y^2D_yB_y & + & C_y^2B_y^2 \\\\
                - & 2C_yA_yD_x^2 & + & 4C_yA_yD_xB_x & - & 2C_yA_yB_x^2 & - & 2C_yA_yD_y^2 & + & 4C_yA_yD_yB_y & - & 2C_yA_yB_y^2 \\\\
                + & A_y^2D_x^2 & - & 2A_y^2D_xB_x & + & A_y^2B_x^2 & + & A_y^2D_y^2 & - & 2A_y^2D_yB_y & + & A_y^2B_y^2 \\\\

                - & \\rho^2D_x^2C_x^2 & + & 2\\rho^2D_x^2C_xB_x & - & \\rho^2D_x^2B_x^2 & - & \\rho^2D_x^2C_y^2 & + & 2\\rho^2D_x^2C_yB_y & - & \\rho^2D_x^2B_y^2 \\\\
                + & 2\\rho^2D_xA_xC_x^2 & - & 4\\rho^2D_xA_xC_xB_x & + & 2\\rho^2D_xA_xB_x^2 & + & 2\\rho^2D_xA_xC_y^2 & - & 4\\rho^2D_xA_xC_yB_y & + & 2\\rho^2D_xA_xB_y^2 \\\\
                - & \\rho^2A_x^2C_x^2 & + & 2\\rho^2A_x^2C_xB_x & - & \\rho^2A_x^2B_x^2 & - & \\rho^2A_x^2C_y^2 & + & 2\\rho^2A_x^2C_yB_y & - & \\rho^2A_x^2B_y^2 \\\\
                - & \\rho^2D_y^2C_x^2 & + & 2\\rho^2D_y^2C_xB_x & - & \\rho^2D_y^2B_x^2 & - & \\rho^2D_y^2C_y^2 & + & 2\\rho^2D_y^2C_yB_y & - & \\rho^2D_y^2B_y^2 \\\\
                + & 2\\rho^2D_yA_yC_x^2 & - & 4\\rho^2D_yA_yC_xB_x & + & 2\\rho^2D_yA_yB_x^2 & + & 2\\rho^2D_yA_yC_y^2 & - & 4\\rho^2D_yA_yC_yB_y & + & 2\\rho^2D_yA_yB_y^2 \\\\
                - & \\rho^2A_y^2C_x^2 & + & 2\\rho^2A_y^2C_xB_x & - & \\rho^2A_y^2B_x^2 & - & \\rho^2A_y^2C_y^2 & + & 2\\rho^2A_y^2C_yB_y & - & \\rho^2A_y^2B_y^2 \\\\
              \\end{array}
            \\right) = 0
          `)}
        </div>
        <Typography paragraph>Most geometric statements can be expressed by one ore more polynomial equations.</Typography>
      </Section>

      <Section title='3. Orthocenter Theorem'>
        <Typography paragraph>An application of Automatic Geometric Theorem Proving is applied for the following well-known theorem.</Typography>
        <Typography component='blockquote' paragraph style={{ borderLeft: '2px solid lightgray', paddingLeft: '1em' }}><b>Theorem.</b> Let {$('\\triangle ABC')} be a triangle in the plane. The three altitudes of a triangle meet at a single point {$('H')}, often called the <em>orthocenter</em> of the triangle.</Typography>
        <Typography>The first step is to translate the hypotheses into polynomial equations. Let {$('\\triangle ABC')} be a triangle such that {$('A')} lies on the origin and {$('B')} lies on the {$('x')}-axis as in the following diagram:</Typography>
        <div style={{ textAlign: 'center' }}>
          <img src='f_6.png' width={300} />
        </div>
        <Typography>This gives us the independent variables</Typography>
        {$$(`
          \\begin{align}
            A & = (0, 0), \\\\
            B & = (u_1, 0), \\\\
            C & = (u_2, u_3). \\\\
          \\end{align}
        `)}
        <Typography>Next, we construct the feet of the {$('3')} altitudes with coordinates {$('H_A = (x_1, x_2)')}, {$('H_B = (x_3, x_4)')}, and {$('H_C = (x_5, 0)')}. The requirement that {$('\\overline{AH_A}')} forms an altitude with {$('A')} is given by the two hypotheses</Typography>
        {$$(`
          \\begin{align}
            \\text{$B$, $C$, $H_A$ are collinear:} \\quad & h_1 = u_3x_1-u_3u_1-u_2x_2+u_1x_2 = 0, \\\\
            \\text{$AH_A \\perp BC$:} \\quad & h_2 = x_2u_3+u_2x_1-u_1x_1 = 0. \\\\
          \\end{align}
        `)}
        <Typography>Doing the same for {$('H_B')} and {$('H_C')} gives a total of {$('5')} hypotheses. (Note that the collinearity of {$('A')}, {$('B')}, {$('H_C')} is omitted, since {$('A_y = B_y = (H_C)_y = 0')} by construction).</Typography>
        {$$(`
          \\begin{align}
            \\text{$B$, $C$, $H_A$ are collinear:} \\quad & h_1 = u_3x_1-u_3u_1-u_2x_2+u_1x_2 = 0, \\\\
            \\text{$AH_A \\perp BC$:} \\quad & h_2 = x_2u_3+u_2x_1-u_1x_1 = 0, \\\\
            \\text{$A$, $C$, $H_B$ are collinear:} \\quad & h_3 = u_3x_3-u_2x_4 = 0, \\\\
            \\text{$BH_B \\perp AC$:} \\quad & h_4 = x_4u_3+u_2x_3-u_2u_1 = 0, \\\\
            \\text{$CH_C \\perp AB$:} \\quad & h_5 = u_1x_5-u_1u_2 = 0. \\\\
          \\end{align}
        `)}
        <Typography>The conclusion that the three altitude intersects at a single point can be restated as follows: Let {$('O')} be the point where {$('\\overline{AH_A}')} and {$('\\overline{BH_B}')} intersect; then {$('C')}, {$('H_C')}, {$('O')} are collinear. This admits two additional hypotheses regarding {$('O = (x_6, x_7)')},</Typography>
        {$$(`
          \\begin{align}
            \\text{$A$, $H_A$, $O$ are collinear:} \\quad & h_6 = x_2x_6-x_1x_7 = 0, \\\\
            \\text{$B$, $H_B$, $O$ are collinear:} \\quad & h_7 = x_4x_6-x_4u_1-x_3x_7+u_1x_7 = 0, \\\\
          \\end{align}
        `)}
        <Typography>and the final conclusion is</Typography>
        {$$(`
          \\begin{align}
            \\text{$C$, $H_C$, $O$ are collinear:} \\quad & g = -u_3x_6-x_5x_7+x_5u_3+u_2x_7 = 0. \\\\
          \\end{align}
        `)}
        <Typography>Now we can use Maple to compute the Gröbner basis of the ideal</Typography>
        {$$(`
          \\langle h_1, \\ldots, h_7, 1-yg \\rangle \\subseteq \\Bbb{R}(u_1, u_2, u_3)[x_1, \\ldots, x_7, y].
        `)}
        <div style={{ textAlign: 'center' }}>
          <img src='f_1.png' />
        </div>
        <Typography paragraph>Since the Gröbner basis is {$('\\{1\\}')}, by {$('\\text{Propositions 8}')} and {$('\\text{9}')}, the conclusion {$('g')} follows generally.</Typography>
        <Typography>But it is also possible to see how {$('g')} follows by computing the Gröbner basis for</Typography>
        {$$(`
          \\langle h_1, \\ldots, h_7 \\rangle \\subseteq \\Bbb{R}[u_1, u_2, u_3, x_1, \\ldots, x_7],
        `)}
        <Typography>which Maple gives as</Typography>
        {$$(`
          \\operatorname{Groebner[Basis]}([h_1, \\ldots, h_7], \\operatorname{lex}) = [-u_1^3u_2u_3+u_1^2u_2^2u_3+u_1^2u_3^2x_7, \\ldots].
        `)}
        <Typography>There are {$('30')} elements in this basis, but we can see already that the first term factors into</Typography>
        {$$(`
          -u_1^3u_2u_3+u_1^2u_2^2u_3+u_1^2u_3^2x_7 = u_1^2(-u_1u_2u_3+u_2^2u_3+u_3^2x_7)
        `)}
        <Typography paragraph>which means that the variety defined by this ideal can be decomposed further. The following procedure can be used to recursively decompose the variety into (possibly non-distinct) irreducible varieties:</Typography>
        <Highlight language='maple'>
          {`
DecomposeVarieties := proc(polys)
  local i, j, f, groebnerBasis, polyFactors, splits, newBasis:
  groebnerBasis := Groebner[Basis](polys, porder):
  for i, f in groebnerBasis do
    polyFactors := factors(f)[2]:
    if numelems(polyFactors) > 1 then
      splits := [0 $ numelems(polyFactors)]:
      for j from 1 to numelems(polyFactors) do
        newBasis := copy(groebnerBasis):
        newBasis[i] := polyFactors[j][1]:
        splits[j] := DecomposeVarieties(newBasis):
      end do:
      return ListTools[Flatten](splits, 1):
    end if:
  end do:
return [groebnerBasis]:
end proc:
          `.trim()}
        </Highlight>
        <Typography paragraph>This procedure decomposes the original variety into {$('234')} elements, but most of them contain either {$('u_1')} or {$('u_3')} as a basis polynomial. When either of these polynomials are in the basis, it results in the degenerate case of either {$('B = A')} or {$('A')}, {$('B')}, {$('C')} collinear, so these varieties can be excluded.</Typography>
        <div style={{ textAlign: 'center' }}>
          <img src='f_3.png' />
        </div>
        <Typography paragraph>We are left with {$('2')} varieties, {$('V_1')} and {$('V_2')}. Since {$('u_2 \\in V_1')}, {$('V_1')} corresponds to the case where {$('\\angle CAB')} forms a right angle. Regardless, Maple shows that {$('g')} vanishes on both these varieties.</Typography>
        <div style={{ textAlign: 'center' }}>
          <img src='f_4.png' />
        </div>
      </Section>

      <Section title='4. Centroid Theorem'>
        <Typography paragraph>The previous section is repeated here for a similar theorem.</Typography>
        <Typography component='blockquote' paragraph style={{ borderLeft: '2px solid lightgray', paddingLeft: '1em' }}><b>Theorem.</b> Let {$('\\triangle ABC')} be a triangle in the plane. If we let {$('M_1')} be the midpoint of {$('\\overline{BC}')}, {$('M_2')} be the midpoint of {$('\\overline{AC}')} and {$('M_3')} be the midpoint of {$('\\overline{AB}')}, then the segments {$('\\overline{AM_1}')}, {$('\\overline{BM_2}')} and {$('\\overline{CM_3}')} meet at a single point {$('M')}, often called the <em>centroid</em> of the triangle.</Typography>
        <Typography>Let {$('\\triangle ABC')} be defined as in the previous section:</Typography>
        {$$(`
          \\begin{align}
            A & = (0, 0), \\\\
            B & = (u_1, 0), \\\\
            C & = (u_2, u_3). \\\\
          \\end{align}
        `)}
        <Typography>Then the {$('3')} midpoints {$('M_1 = (x_1, x_2)')}, {$('M_2 = (x_3, x_4)')}, and {$('M_3 = (x_5, 0)')} are constructed.</Typography>
        {$$(`
          \\begin{align}
            \\text{$M_1$ is the midpoint of $\\overline{BC}$:} \\quad & h_1 = 2x_1-u_1-u_2 = 0, \\\\
            & h_2 = 2x_2-u_3 = 0; \\\\
            \\text{$M_2$ is the midpoint of $\\overline{AC}$:} \\quad & h_3 = 2x_3-u_2 = 0, \\\\
            & h_4 = 2x_4-u_3 = 0; \\\\
            \\text{$M_3$ is the midpoint of $\\overline{AB}$:} \\quad & h_5 = 2x_5-u_1 = 0. \\\\
          \\end{align}
        `)}
        <Typography>The conclusion that the {$('3')} medians intersect at a single point is translated to the fact that the intersection of {$('\\overline{AM_1}')} and {$('\\overline{BM_2}')} is collinear with {$('C')} and {$('M_3')}. Let {$('O = (x_6, x_7)')} be the intersection of {$('\\overline{AM_1}')} and {$('\\overline{BM_2}')}.</Typography>
        {$$(`
          \\begin{align}
            \\text{$A$, $M_1$, $O$ are collinear:} \\quad & h_6 = x_2x_6-x_1x_7 = 0, \\\\
            \\text{$B$, $M_2$, $O$ are collinear:} \\quad & h_7 = x_4x_6-x_4u_1-x_3x_7+u_1x_7 = 0. \\\\
          \\end{align}
        `)}
        <Typography>The final conclusion is</Typography>
        {$$(`
          \\begin{align}
            \\text{$C$, $M_3$, $O$ are collinear:} \\quad & g = -u_3x_6-x_5x_7+x_5u_3+u_2x_7 = 0. \\\\
          \\end{align}
        `)}
        <Typography>Using Maple to compute the Gröbner basis of the ideal</Typography>
        {$$(`
          \\langle h_1, \\ldots, h_7, 1-yg \\rangle \\subseteq \\Bbb{R}(u_1, u_2, u_3)[x_1, \\ldots, x_7, y],
        `)}
        <div style={{ textAlign: 'center' }}>
          <img src='f_2.png' />
        </div>
        <Typography>The Gröbner basis is {$('\\{1\\}')}, and the conclusion {$('g')} follows generally. Addtionally, decomposing the variety defined by</Typography>
        {$$(`
          \\langle h_1, \\ldots, h_7 \\rangle \\subseteq \\Bbb{R}[u_1, u_2, u_3, x_1, \\ldots, x_7]
        `)}
        <Typography paragraph>results in {$('3')} varieties.</Typography>
        <div style={{ textAlign: 'center' }}>
          <img src='f_5.png' />
        </div>
        <Typography paragraph>{$('V_1')} and {$('V_2')} correspond to the same degenerate cases as before, and {$('g \\in V_3')} so the conclusion {$('g')} follows. Curiously, {$('g')} also follows strictly since {$('g \\in \\langle h_1, \\ldots, h_7 \\rangle')}.</Typography>
      </Section>

      <Section title='5. Exploration'>
        <Typography paragraph>Gröbner bases have shown that we have algorithmic methods for conclusively determining whether certain geometric theorems are true. This technique can be used for more general systems and theorems in those systems. “Using the Groebner basis algorithm to find proofs of unsatisfiability” by Clegg et al. shows how a modification of the technique can be used for proofs in a propositional calculus.</Typography>
        <Typography>The general strategy is similar:</Typography>
        <List counter='counter(list) "."'>
          <li>
            <Typography>Translate axioms, hypotheses, and rules of inference into polynomial equations.</Typography>
          </li>
          <li>
            <Typography>Use Gröbner bases to determine the relationship between hypotheses and conclusion.</Typography>
          </li>
        </List>
        <Typography paragraph>The paper continues by offering a proof-proving algorithm similar to the Gröbner basis algorithm, then examining its efficacy and algorithmic complexity alongside other known algorithms.</Typography>
        <Typography paragraph>What I find most interesting about this is how more natural statements of logic can be codified as “meaningless” assertions about numbers. Even if a computer can be used to solve any theorem or question we might pose, there is a disconnect between what the computer asserts is true and how we interpret it.</Typography>
      </Section>

      <Section title='6. References'>
        <Typography paragraph>Clegg, M., Edmonds, J., & Impagliazzo, R. (1996, July). Using the Groebner basis algorithm to find proofs of unsatisfiability. In <i>Proceedings of the twenty-eighth annual ACM symposium on Theory of computing</i> (pp. 174-183).</Typography>
        <Typography paragraph>Cox, D. A. (2016). <i>Ideals, Varieties, and Algorithms</i> (4th ed.). Springer.</Typography>
      </Section>
    </Page>
  )
}

export default Final

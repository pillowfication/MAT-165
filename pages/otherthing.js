import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import { $, $$ } from '../src/MathJax'

const Final = () => {
  return (
    <Page>
      <Typography>Let {$('f')} be a complex function, and {$('z_0')} a point in its domain. If {$('f')} is analytic in an open set {$('U')} around {$('z_0')} except possibly at {$('z_0')}, then {$('f')} has a unique convergent Laurent expansion in {$('B_R(z_0) \\setminus \\{z_0\\} \\subseteq U')}, where</Typography>
      {$$(`
        f(z) = \\sum_{k \\in \\Bbb{Z}} c_k (z-z_0)^k.
      `)}
      <Typography paragraph>Note that is is a genralization of the Taylor series of {$('f')} at {$('z_0')} for the case where {$('z_0')} is a singularity. Furthermore, the Laurent expansion converges uniformly in {$('B_{R-\\varepsilon}(z_0)')}, where {$('R')} is the distance to the next nearest singularity, and {$('\\varepsilon')} is a positive number as in the following diagram:</Typography>
      <div style={{ textAlign: 'center' }}>
        <img src='thinggy.png' />
      </div>
      <Typography>In other words, the Laurent series converges on the largest annulus around {$('z_0')} which is analytic, and converges uniformly and absolutely on any sub-annulus. And whenever a series converges uniformly, we are able to pass integrals through summation signs such that</Typography>
      {$$(`
        \\int f(z)\\, dz = \\int \\left(\\sum_{k \\in \\Bbb{Z}} c_k (z-z_0)^k\\right)dz = \\sum_{k \\in \\Bbb{Z}} \\int c_k (z-z_0)^k\\,dz.
      `)}
      <Typography>While computing the values of all {$('c_k')} is not generally important, it can be noted that</Typography>
      {$$(`
        c_k = \\frac{1}{2\\pi i} \\oint_C \\frac{f(z)}{(z-z_0)^{k+1}} dz.
      `)}
      <Typography>Now for a given meromorphic function, let {$('C')} be a curve possibly containing some singularities. For each singularity it contains, let {$('D_i')} be a curve containing just the {$('i')}’th singularity, and join all the curves together with straight lines {$('\\Gamma_j')} in order to create a single simply connected curve containing <em>no</em> singularities as in the following picture:</Typography>
      <div style={{ textAlign: 'center' }}>
        <img src='thinggy3.png' width={500} />
      </div>
      <Typography>Some {$('D_i')} will be broken into {$('D_{i,1}')} and {$('D_{i,2}')}. Now that the new curve is analytic everywhere inside, we can evaluate</Typography>
      {$$(`
        0 = \\int_{C + \\Gamma_1 - D_{1,1} + \\Gamma_2 - ...} f = \\int_C f - \\sum \\int_{D_i} f
      `)}
      <Typography paragraph>where the {$('\\Gamma_i')}’s cancel themselves out, and the negative sign in front of each {$('D_i')} is due to their orientation. Therefore the original integral {$('\\int_C f')} is equal to the sum of the integrals around each singularity by themselves, and we can focus on the singular case of a single singularity.</Typography>
      <Typography>When a singularity {$('z_0')} admits a uniformly convergent Laurent expansion, then we can integrate</Typography>
      {$$(`
        \\int_C f = \\int_C \\left(\\sum_{k\\in\\Bbb{Z}}c_k(z-z_0)^k\\right) = \\sum_{k\\in\\Bbb{Z}} \\int_C c_k(z-z_0)^k.
      `)}
      <Typography>But we know that {$('\\int_C (z-z_0)^k = 0')} for {$('k \\neq 1')}, so the only term remaining is</Typography>
      {$$(`
        \\int_C f = \\int_C c_{-1}(z-z_0)^{-1} = 2\\pi i c_{-1}.
      `)}
      <Typography>The coefficient {$('c_{-1}')} is called the residue of {$('z_0')} denoted {$('\\operatorname{Res}(f, z_0)')}, and putting everything together gives us the Residue Theorem.</Typography>
      {$$(`
        \\int_C f = \\sum_k 2\\pi i\\cdot \\operatorname{Res}(f, z_k) = 2\\pi i \\sum_k \\operatorname{Res}(f, z_k)
      `)}
      <Typography>where {$('z_k')} are all the singularities contained inside {$('C')}.</Typography>
      <h3>Example 1</h3>
      <Typography component='blockquote' paragraph style={{ borderLeft: '2px solid lightgray', paddingLeft: '1em' }}>{$$('\\int_{-\\infty}^\\infty \\frac{1}{1+x^2}\\,dx')}</Typography>
      <Typography paragraph>When interpreted as a complex function, {$('f(z) = 1/(1+z^2)')} has singularities at {$('i, -i')}. Let {$('C_I, C_R')} be curves in the complex plane, where {$('C_I')} is the segment from {$('-R')} to {$('R')}, and {$('C_R')} is the semicircle from {$('R')} counter-clockwise to {$('-R')} as in the following picture:</Typography>
      <div style={{ textAlign: 'center' }}>
        <img src='thinggy2.png' />
      </div>
      <Typography>Then {$('C = C_I + C_R')} is a simply closed curve containing the singularity {$('i')} for {$('R > 1')}. By the Residue Theorem,</Typography>
      {$$(`
        \\oint_C f(z)\\,dz = \\int_{C_I} f(z)\\,dz + \\int_{C_R} f(z)\\,dz = 2\\pi i\\cdot \\operatorname{Res}(f, i)
      `)}
      <Typography>It can be shown that as {$('R \\to \\infty')}, the second integral tends to {$('0')}.</Typography>
      {$$(`
        \\begin{align}
          && \\int_{C_R} f(z)\\,dz
          & = \\int_0^\\pi f(Re^{it})\\,dz \\\\
          && & \\leq \\int_0^\\pi \\left| \\frac{-Rie^{it}}{1+R^2(e^{it})^2} \\right|\\,dt \\\\
          && & \\leq \\int_0^\\pi \\frac{R}{R^2-1}\\,dt \\\\
          \\implies && \\lim_{R\\to\\infty} \\int_{C_R} f(z)\\,dz
          & \\leq \\lim_{R\\to\\infty} \\int_0^\\pi \\frac{R}{R^2-1}\\,dt \\\\
          && & = 0.
        \\end{align}
      `)}
      <Typography>Therefore</Typography>
      {$$(`
        \\lim_{R\\to\\infty} \\oint_C f(z)\\,dz = \\lim_{R\\to\\infty} \\int_{C_I} f(z)\\,dz = \\int_{-\\infty}^\\infty f(x)\\,dx = 2\\pi i\\cdot \\operatorname{Res}(f, i).
      `)}
      <Typography>To evaluate {$('\\operatorname{Res}(f, i)')}, we note that</Typography>
      {$$(`
        f(z) = \\frac{1}{(z-i)(z+i)} \\implies \\lim_{z\\to i} f(z)\\cdot(z-i) = \\frac{1}{2i}.
      `)}
      <Typography>Since this limit exists and is non-zero, {$('i')} must be a simple pole and</Typography>
      {$$(`
        \\lim_{z\\to i} \\left(\\frac{c_{-1}}{z-i} + \\sum c_k (z-i)^k\\right)\\cdot (z-i) = \\frac{1}{2i} \\implies c_{-1} = \\frac{1}{2i}.
      `)}
      <Typography>Altogether,</Typography>
      {$$(`
        \\int_{-\\infty}^\\infty \\frac{1}{1+x^2}\\,dx = 2\\pi i\\cdot \\operatorname{Res}(f, i) = 2\\pi i \\cdot \\frac{1}{2i} = \\pi.
      `)}
      <h3>Example 2</h3>
      <Typography component='blockquote' paragraph style={{ borderLeft: '2px solid lightgray', paddingLeft: '1em' }}>{$$('I = \\int_0^\\infty f(x)\\,dx = \\int_0^\\infty \\frac{x^2\\,dx}{(x^2+9)(x^2+4)^2}')}</Typography>
      <Typography>Because {$('f')} is even, we have</Typography>
      {$$(`
        I = \\frac12 \\int_{-\\infty}^\\infty f(x)\\,dx.
      `)}
      <Typography>Using the same curve in {$('\\text{Example 1}')} that now surrounds the two poles {$('2i')} and {$('3i')}, leads to the same result of</Typography>
      {$$(`
        \\lim_{R\\to\\infty} \\oint_C f(z)\\,dz = \\int_{-\\infty}^\\infty f(x)\\,dx = 2\\pi i \\cdot \\left[\\operatorname{Res}(f, 2i) + \\operatorname{Res}(f, 3i)\\right].
      `)}
      <Typography>Now it remains to compute the residues. The residue of the simple pole {$('3i')} can be computed in the same manner as in {$('\\text{Example 1}')}.</Typography>
      {$$(`
        \\operatorname{Res}(f, 3i) = \\lim_{z\\to 3i} f(z)(z-3i) = \\lim_{z\\to 3i} \\frac{z^2}{(z+3i)(z^2+4)^2} = -\\frac{3}{50i}.
      `)}
      <Typography>To calculate the residue of the double pole {$('2i')}, first we compute the {$('c_{-2}')} term in the Laurent expansion.</Typography>
      {$$(`
        c_{-2} = \\lim_{z\\to 2i} f(z)(z-2i)^2 = \\lim_{z\\to 2i} \\frac{z^2}{(z^2+9)(z+2i)^2} = \\frac{1}{20}.
      `)}
      <Typography>Now we let {$('g = f-c_{-2}/(z-2i)^2')} and note that it has a simple pole whose residue is the same as {$('\\operatorname{Res}(f, 2i)')}. This can be computed the same as the other simple poles.</Typography>
      {$$(`
        \\begin{align}
          \\operatorname{Res}(g, 2i)
          & = \\lim_{z\\to 2i} \\left[\\frac{z^2}{(z^2+9)(z^2+4)^2}-\\frac{1/20}{(z-2i)^2}\\right](z-2i) \\\\
          & = \\lim_{z\\to 2i} \\left[\\frac{-z^3-6iz^2+27z+18i}{20(z-2i)(z+2i)^2(z+9)}\\right](z-2i) \\\\
          & = -\\frac{13i}{200}.
        \\end{align}
      `)}
      <Typography>Altogether,</Typography>
      {$$(`
        I = \\frac12 \\cdot 2\\pi i \\cdot \\left[\\operatorname{Res}(f, 2i) + \\operatorname{Res}(f, 3i)\\right] = \\frac{\\pi}{200}.
      `)}
      <h3>Example 3</h3>
      <Typography component='blockquote' paragraph style={{ borderLeft: '2px solid lightgray', paddingLeft: '1em' }}>{$$('I = \\int_0^{2\\pi} \\frac{d\\theta}{\\frac54+\\sin\\theta}')}</Typography>
      <Typography>With a change of variables, this is equal to</Typography>
      {$$(`
        I = \\int_0^{2\\pi} \\frac{d\\theta}{\\frac54+\\sin\\theta} = \\int_C \\frac{(-i/z)\\,dz}{\\frac54+\\left(\\frac{z-z^{-1}}{2i}\\right)}
      `)}
      <Typography>where {$('C')} is the unit circle going counter-clockwise. Thus</Typography>
      {$$(`
        \\begin{align}
          I
          & = \\int_C \\frac{(-i/z)\\,dz}{\\frac54+\\frac{z-z^{-1}}{2i}} \\\\
          & = \\int_C \\frac{(-i/z)\\,dz}{\\frac54 + \\frac{z^2-1}{2iz}} \\\\
          & = \\int_C \\frac{i}{z}\\cdot\\frac{8iz\\,dz}{4z^2-4+10iz} \\\\
          & = \\int_C \\frac{4\\,dz}{(z+2i)(2z+i)}.
        \\end{align}
      `)}
      <Typography>Let {$('f')} be the function inside the integral which has poles at {$('-i/2')} and {$('-2i')}, one of which lies inside {$('C')}. So by the Residue Theorem,</Typography>
      {$$(`
        I = 2\\pi i \\cdot \\operatorname{Res}(f, -i/2) = 2\\pi i \\cdot \\frac{4}{3i} = \\frac{8\\pi}{3}.
      `)}
      <Typography>Note that {$('-i/2')} is a simple pole, so its residue is computed as normal.</Typography>
    </Page>
  )
}

export default Final

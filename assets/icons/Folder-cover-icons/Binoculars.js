import React from 'react';
import { Svg } from 'expo';
const { Path } = Svg;

const SVG = ({
    defaultColors = {},
    color = 'blue',
    width = 35,
    height = 35,
}) => {
    // Use default colors if none hex color is set
    color = color.startsWith('#') ? color : defaultColors[color];
    return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height}
        viewBox="0 0 35 35">
    <Path 
        fill={color} 
        fill-rule="evenodd" 
        d="M600,683.068875 C600,682.629175 600.099685,681.940443 600.230199,681.505399 L604.542529,667.130965 C604.669664,666.707181 605.135264,666.363636 605.553872,666.363636 L613.537037,666.363636 C613.968451,666.363636 614.318182,666.730813 614.318182,667.159784 L614.318182,678.294761 C614.318182,678.734462 613.977672,679.090909 613.515275,679.090909 L611.939271,679.090909 C611.495837,679.090909 611.136364,679.431419 611.136364,679.893816 L611.136364,681.46982 L611.136364,683.068875 L611.136364,694.203852 C611.136364,694.643552 610.765837,695 610.335464,695 L600.8009,695 C600.358575,695 600,694.632823 600,694.203852 L600,683.068875 L600,683.068875 L600,683.068875 L600,683.068875 Z M635,683.068875 C635,682.629175 634.900315,681.940443 634.769801,681.505399 L630.457471,667.130965 C630.330336,666.707181 629.864736,666.363636 629.446128,666.363636 L621.462963,666.363636 C621.031549,666.363636 620.681818,666.730813 620.681818,667.159784 L620.681818,678.294761 C620.681818,678.734462 621.022328,679.090909 621.484725,679.090909 L623.060729,679.090909 C623.504163,679.090909 623.863636,679.431419 623.863636,679.893816 L623.863636,681.46982 L623.863636,683.068875 L623.863636,694.203852 C623.863636,694.643552 624.234163,695 624.664536,695 L634.1991,695 C634.641425,695 635,694.632823 635,694.203852 L635,683.068875 L635,683.068875 L635,683.068875 L635,683.068875 Z M607.954545,660.788119 C607.954545,660.352853 608.296682,660 608.734852,660 L613.537875,660 C613.968827,660 614.318182,660.343243 614.318182,660.788119 L614.318182,663.984608 C614.318182,664.419874 613.976045,664.772727 613.537875,664.772727 L608.734852,664.772727 C608.303901,664.772727 607.954545,664.429484 607.954545,663.984608 L607.954545,660.788119 L607.954545,660.788119 L607.954545,660.788119 L607.954545,660.788119 Z M620.681818,660.788119 C620.681818,660.352853 621.023955,660 621.462125,660 L626.265148,660 C626.696099,660 627.045455,660.343243 627.045455,660.788119 L627.045455,663.984608 C627.045455,664.419874 626.703318,664.772727 626.265148,664.772727 L621.462125,664.772727 C621.031173,664.772727 620.681818,664.429484 620.681818,663.984608 L620.681818,660.788119 L620.681818,660.788119 L620.681818,660.788119 L620.681818,660.788119 Z M615.909091,667.144781 C615.909091,666.713367 616.249601,666.363636 616.711998,666.363636 L618.288002,666.363636 C618.731435,666.363636 619.090909,666.726173 619.090909,667.144781 L619.090909,675.127946 C619.090909,675.559361 618.750399,675.909091 618.288002,675.909091 L616.711998,675.909091 C616.268565,675.909091 615.909091,675.546554 615.909091,675.127946 L615.909091,667.144781 L615.909091,667.144781 L615.909091,667.144781 L615.909091,667.144781 Z" transform="translate(-600 -660)"/>
    </Svg>
)};

export default SVG;
import React from 'react';
import { Svg } from 'expo';
const { Path } = Svg;

const SVG = ({
    defaultColors = {},
    color = 'blue',
    width = 32,
    height = 39,
}) => {
    // Use default colors if none hex color is set
    color = color.startsWith('#') ? color : defaultColors[color];
    return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 32 39">
    <Path 
        fill={color} 
        fill-rule="evenodd" 
        d="M35.3148838,442.185017 C35.344162,442.025316 35.3594662,441.860686 35.3594662,441.692469 C35.3594662,440.206226 34.1647995,439 32.6927995,439 C31.2207995,439 30.0261329,440.206226 30.0261329,441.692469 C30.0261329,441.911846 30.0521616,442.125123 30.1012689,442.329321 C25.5966514,443.577561 22.2940783,447.663105 22.2940783,452.511297 C22.2940783,468.204962 17,467.937086 17,469.782259 C17,471.923506 24.1622616,473.659414 33,473.659414 C41.8377384,473.659414 49,471.923506 49,469.782259 C49,467.937086 43.7059217,468.485175 43.7059217,452.511297 C43.7059217,447.455949 40.1150907,443.229815 35.3148838,442.185017 L35.3148838,442.185017 L35.3148838,442.185017 L35.3148838,442.185017 Z M37.0527851,475.190877 C36.6994133,476.797485 35.2787909,478 33.5816884,478 C31.9068548,478 30.5012932,476.828836 30.1250518,475.253911 C31.0576932,475.294908 32.0185144,475.316318 33,475.316318 C34.4002635,475.316318 35.7584663,475.27274 37.0527851,475.190877 L37.0527851,475.190877 L37.0527851,475.190877 L37.0527851,475.190877 Z" transform="translate(-17 -439)"/>
    </Svg>
)};

export default SVG;
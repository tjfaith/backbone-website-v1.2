import React from 'react';

const Spinner = ({ color = '#ffffff', className='' }) => {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="198"
      height="198"
      style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}
    >
      <g>
        <g transform="rotate(0 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="-0.8333333333333334s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="-0.6666666666666666s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="-0.5s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="-0.3333333333333333s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="-0.16666666666666666s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect fill={color} height="14" width="5" ry="3.5" rx="2.5" y="25" x="47.5">
            <animate
              repeatCount="indefinite"
              begin="0s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
      </g>
    </svg>
  );
};

export default Spinner;

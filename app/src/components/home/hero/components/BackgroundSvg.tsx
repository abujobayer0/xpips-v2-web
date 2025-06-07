import React from 'react';

const BackgroundSvg: React.FC = () => (
  <div className="w-full flex justify-center">
    <svg
      className="w-full h-auto"
      viewBox="0 0 1440 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M720 1.55664C970.3 1.55664 1196.95 52.2817 1361.06 134.337C1525.11 216.364 1626.94 329.857 1626.94 455.5C1626.94 581.143 1525.11 694.636 1361.06 776.663C1196.95 858.718 970.3 909.443 720 909.443C469.7 909.443 243.05 858.718 78.9395 776.663C-85.1146 694.636 -186.943 581.143 -186.943 455.5C-186.943 329.857 -85.1146 216.364 78.9395 134.337C243.05 52.2817 469.7 1.55664 720 1.55664Z"
        fill="url(#paint0_linear_124_155)"
        stroke="url(#paint1_linear_124_155)"
        strokeWidth="1.8875"
      />
      <defs>
        <linearGradient
          id="paint0_linear_124_155"
          x1="720"
          y1="-104.144"
          x2="720"
          y2="455.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F69FF" />
          <stop offset="1" stopColor="#03001F" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_124_155"
          x1="720"
          y1="2.5"
          x2="720"
          y2="908.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F69FF" />
          <stop offset="1" stopColor="#1F69FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundSvg;

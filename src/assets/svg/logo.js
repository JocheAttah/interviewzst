import React from "react";

const Logo = () => {
  return (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      viewBox="0 0 477 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_9_20)">
        <rect x="4" width="469" height="402" rx="48" fill="#2E1CC4" />
        <rect
          x="4.5"
          y="0.5"
          width="468"
          height="401"
          rx="47.5"
          stroke="black"
        />
      </g>
      <path
        d="M176.609 115.25H257.188C272.938 115.25 286.625 117.594 298.25 122.281C309.875 126.969 318.828 133.906 325.109 143.094C331.484 152.281 334.672 163.625 334.672 177.125C334.672 188.844 332.844 198.641 329.188 206.516C325.531 214.391 320.422 220.906 313.859 226.062C307.391 231.125 299.844 235.297 291.219 238.578L275.047 247.719H207.406L207.125 209.609H257.188C263.469 209.609 268.672 208.484 272.797 206.234C276.922 203.984 280.016 200.797 282.078 196.672C284.234 192.453 285.312 187.438 285.312 181.625C285.312 175.719 284.234 170.656 282.078 166.438C279.922 162.219 276.734 158.984 272.516 156.734C268.391 154.484 263.281 153.359 257.188 153.359H225.969V320H176.609V115.25ZM288.688 320L243.406 229.438L295.719 229.156L341.562 317.891V320H288.688Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_9_20"
          x="0"
          y="0"
          width="477"
          height="410"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_20"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_20"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Logo;

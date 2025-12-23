import { memo, type ComponentProps } from 'react';

const UnderlineIcon = memo(function UnderlineIcon(
  props: ComponentProps<'svg'>,
) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 200 9"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M2.00025 6.99997C24.7533 3.65968 111.97 -2.48625 197.965 2.87189"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      ></path>
    </svg>
  );
});

export default UnderlineIcon;

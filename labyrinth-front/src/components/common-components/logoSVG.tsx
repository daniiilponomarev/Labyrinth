import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';
import { motion } from 'framer-motion';

export const InnerPath = styled(motion.path)`
  stroke: ${colors.blue90};
  stroke-width: 3px;
  transition: stroke ${transition.average};
`;

export const OuterPath = styled(motion.path)`
  fill: ${colors.blue0};
  stroke: ${colors.blue90};
  stroke-width: 3px;
  transition: stroke ${transition.average}, fill ${transition.average};
`;

const iconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1
  }
};

export const LogoSVG = ({
  className,
  size,
  onClick
}: {
  className?: string;
  size: number | string;
  onClick?: () => any;
}) => (
  <>
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-labelledby="title"
      role="img"
      width={size}
      height={size}
      onClick={onClick}
    >
      <title>Map</title>
      <OuterPath
        d="M63 11v50l-22-6-16 6-22-6V4l22 6 16-6 22 6z"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: Number.parseFloat(transition.long), ease: 'easeInOut' }
        }}
      />
      <InnerPath
        d="M43 17l9 9M43 27l9-9m-19 7a10 10 0 0 1 6-2M29 35a10 10 0 0 0 1-2V32a10 10 0 0 1 1-4M21 42a10 10 0 0 0 6-3M9 42h7M2 42h4"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: Number.parseFloat(transition.long), ease: 'easeInOut' }
        }}
      />
    </svg>
  </>
);

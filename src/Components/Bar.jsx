import React from 'react';
import { Bar as VXBar } from '@vx/shape';
import PropTypes from 'prop-types';

const Bar = ({ width, height, x, y }) => {
  return (
    <VXBar
      x={x}
      y={y}
      width={width}
      height={height}
      fill='rgba(160, 116, 196, 0.69)'
      bottom={0}
    />
  );
}

Bar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Bar;

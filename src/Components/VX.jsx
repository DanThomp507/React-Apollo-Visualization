import React from 'react';
import { Group } from '@vx/group';
import { scaleBand, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import Bar from './Bar';
import PropTypes from 'prop-types';

// accessors
const x = d => d.label;
const y = d => d.value;

const VX = ({ data }) => {
  // graph dimensions and margins
  const width = 700;
  const height = 500;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales
  const xScale = scaleBand({
    range: [0, xMax],
    domain: data.map(x),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  const compose = (scale, accessor) => data => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group left={50} key={`bar-${i}`}>
            <AxisLeft left={10} scale={yScale} numTicks={5} label='Likelihood' />
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill='rgba(50, 148, 148, 0.8)'
            />
            <AxisBottom
              scale={xScale}
              label='Topics'
              labelOffset={15}
              top={yMax}
              bottom={10}
            />
          </Group>
        );
      })
      }
    </svg>
  );
}

VX.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default VX;


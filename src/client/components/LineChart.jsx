import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => (
  <div>
    <Line
      data={data}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: true,
      }}
    />
  </div>
  );

LineChart.propTypes = {
  data: React.PropTypes.object,
};

export default LineChart;

import React from 'react';
import { Line } from 'react-chartjs-2';
import superagent from 'superagent';

export default class LineChart extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const that = this;

    superagent.get('/api/getChart')
      .end((err, res) => {
        console.log('res', res);
        console.log('err', err);
        that.setState({ data: JSON.parse(res.text) || [] });
      });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}

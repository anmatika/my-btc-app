import React from 'react';
import { connect } from 'react-redux';
import { getPriceFromApi, changeInputValue } from '../../actions';
import CustomButton from '../input/CustomButton';
import CustomInput from '../input/CustomInput';
import LineChart from './LineChart';
import lineChartTemplateData from './lineChartTemplateData';

function apiDataToChartData(apiData) {
  if (apiData == null || apiData.values == null) {
    return {};
  }
  const xVals = apiData.values.map(val => new Date(val.x * 1000).toDateString());
  const yVals = apiData.values.map(val => val.y);
  const data = Object.assign({}, lineChartTemplateData.line);
  data.labels = xVals;
  data.datasets[0].data = yVals;
  data.datasets[0].label = `${apiData.name} - period ${apiData.period} - currency ${apiData.unit}`;

  return data;
}

const LineChartContainer = ({ isLoading, response, getPrice, onInputChange, inputValue }) => {
  const data = apiDataToChartData(response);
  return (<div>
    <br />
    <LineChart data={data} />

    <CustomButton
      text={isLoading ? 'Loading ..' : 'Submit value to API'}
      onClick={() => getPrice(inputValue)}
    />

    <CustomInput
      type="text"
      disabled={isLoading}
      onChange={onInputChange}
      value={inputValue}
    />
  </div>);
};

LineChartContainer.propTypes = {
  isLoading: React.PropTypes.bool,
  response: React.PropTypes.object,
  getPrice: React.PropTypes.func,
  onInputChange: React.PropTypes.func,
  inputValue: React.PropTypes.node,
};

export default connect(
    state => ({ ...state }),
    dispatch => ({
      onInputChange: event => dispatch(changeInputValue(event.target.value)),
      getPrice: value => dispatch(getPriceFromApi(value)),
    }),
)(LineChartContainer);

import React from 'react';
import { connect } from 'react-redux';
import { requestResponseFromAPI, changeInputValue } from '../../actions';
import CustomButton from '../../components/input/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import LineChart from '../../components/LineChart';
import lineChartTemplateData from '../../components/lineChartTemplateData';

function prepareData(input) {
  if (input == null || input.values == null) {
    return {};
  }
  const xVals = input.values.map(val => new Date(val.x * 1000).toDateString());
  const yVals = input.values.map(val => val.y);
  const data = Object.assign({}, lineChartTemplateData.line);
  data.labels = xVals;
  data.datasets[0].data = yVals;

  return data;
}

const MainView = ({ isLoading, response, callApiThroughRedux, onInputChange, inputValue }) => {
  const data = prepareData(response);
  return (<div>
    <br />
    <LineChart data={data} />

    <CustomButton
      text={isLoading ? 'Loading ..' : 'Submit value to API'}
      onClick={() => callApiThroughRedux(inputValue)}
    />

    <CustomInput
      type="number"
      disabled={isLoading}
      onChange={onInputChange}
      value={inputValue}
    />
  </div>);
};

MainView.propTypes = {
  isLoading: React.PropTypes.bool,
  response: React.PropTypes.object,
  callApiThroughRedux: React.PropTypes.func,
  onInputChange: React.PropTypes.func,
  inputValue: React.PropTypes.node,
};

export default connect(
    state => ({ ...state }),
    dispatch => ({
      onInputChange: event => dispatch(changeInputValue(event.target.value)),
      callApiThroughRedux: value => dispatch(requestResponseFromAPI(value)),
    }),
)(MainView);

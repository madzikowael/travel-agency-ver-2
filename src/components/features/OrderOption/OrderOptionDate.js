import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  static propTypes = {
    setOptionValue: PropTypes.func,
  };

  handleChange = date => {
    const { setOptionValue } = this.props;

    this.setState({
      startDate: date,
    },
    () => {
      setOptionValue(date);
    }
    );
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;

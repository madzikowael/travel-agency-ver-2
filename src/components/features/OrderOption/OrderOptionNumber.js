import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = props => {
  return (
    <div className={styles.number}>
      <input type="number" className={styles.inputSmall}
        value={props.currentValue}
        min={props.limits.min}
        max={props.limits.max}
        onChange={event => props.setOptionValue(event.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import Icon from '../../common/Icon/Icon.js';

const OrderOptionIcons = props => (
  <div className={styles.icon}>
    {props.values.map(value => (
      <div
        key={value.id}
        className={`${styles.icon}
          ${props.currentValue === value.id ? styles.iconActive : ''}`}
        onClick={() => props.setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;

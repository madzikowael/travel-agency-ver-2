import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionNumber from './OrderOptionNumber.js';

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}

        />
      </div>
    );
  }
};

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

export default OrderOption;

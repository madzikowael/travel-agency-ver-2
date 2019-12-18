import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import Pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = props => (
  <Row>
    {Pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption {...option}
          currentValue={props.options[option.id]}
          setOrderOption={props.setOrderOption}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;

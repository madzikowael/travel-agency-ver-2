import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import Pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';
import Button from '../../common/Button/Button.js';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(!options.contact.length || !options.name.length) {
    alert('Empty name or contact');
  } else {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponde', parsedResponse);
        alert('Your order`s just  send to system');
      });
  }
};

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
    <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripId, props.tripName, props.countryCode)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;

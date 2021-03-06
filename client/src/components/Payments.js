import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <ul>
        <li>
      <StripeCheckout
        name="Shop"
        description="Buy 30 Credits"
        amount={3000}
        token={token => this.props.handleToken30(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
        <button className="btn">
            Add 30 Credits
        </button>
      </StripeCheckout>
      </li>
      </ul>
    )     
  }
}

export default connect(null, actions)(Payments);
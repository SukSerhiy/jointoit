import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCard } from '../actions/card';

class CardContainer extends Component {

  render() {
    return(<div>Card</div>)
  }
}

const mapStateToProps = state => {
  const { cards } = state.toJS();
  return { cards };
}

const mapDispatchToProps = dispatch => ({
  addCard: payload => dispatch(addCard(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
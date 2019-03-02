import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    card: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      columnId: PropTypes.string
    })
  };

  render() {
    const { card } = this.props;
    return (
      <div className='board-item' id={card.id}>
        <div className='board-item-content'>
          <span>{card.name}</span>
        </div>
      </div>
    )
  }
}

export default Card;
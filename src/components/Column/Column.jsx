import React from 'react';
import PropTypes from 'prop-types';
import ItemAdder from '../ItemAdder';
import Card from '../Card';
import './style.css'

const Column = props => {
  const { column, cards } = props;

  const addCard = (card) => {
    const { onAddCard } = props;
    const { id: columnId } = column;
    onAddCard(card, columnId);
  }

  return (
    <div className='board-column'>
      <div className='board-column-header'>
        <span>{column.name}</span>
      </div>
      <div className='board-column-content' id={column.id}>
        {cards.map((card, key) => (<Card key={key} card={card} />))}
      </div>
      <ItemAdder onEnter={addCard} />
  </div>
  );
}

Column.propTypes = {
    column: PropTypes.shape({
    name: PropTypes.string,
    onAddCard: PropTypes.func
  })
};

export default Column;
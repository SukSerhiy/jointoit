import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColumnList from '../ColumnList';
import ItemAdder from '../ItemAdder';
import './style.css';

class ColumnsPage extends Component {
  static propTypes = {
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    onAddCard: PropTypes.func,
    onRelocateCard: PropTypes.func
  }

  onEnterNewColumn = column => {
    const { addColumn } = this.props;
    this.setState({ isAdding: false });
    if (column.name) {
      addColumn(column);
    }
  }

  render() {
    const { columns, cards, onAddCard, onRelocateCard } = this.props;
    return (
      <div className='columns-page'>
        <ColumnList 
          onDeleteCards={this.props.onDeleteCards}
          columns={columns} 
          cards={cards} 
          onAddCard={onAddCard} 
          onRelocateCard={onRelocateCard} 
        />
        <ItemAdder onEnter={this.onEnterNewColumn} />
      </div>
    )
  }
}

export default ColumnsPage;
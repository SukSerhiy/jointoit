import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import ColumnsPage from '../components/ColumnsPage';
import { addColumn } from '../actions/column';
import { addCard, changeColumnId } from '../actions/card';

class ColumnContainer extends Component {
  addColumn = (column) => {
    const { addColumn } = this.props;
    const id = uniqid();
    addColumn({  ...column, id });
  }

  addCard = (card, columnId) => {
    const { addCard } = this.props;
    const id = uniqid();
    addCard({ ...card, columnId, id });
  }

  onRelocateCard = (cardId, newColumnId) => {
    const { changeColumnId } = this.props;
    changeColumnId({ cardId, newColumnId });
  }

  render() {
    const { columns, cards } = this.props;
    return (
      <ColumnsPage 
        columns={columns} 
        cards={cards} 
        addColumn={this.addColumn} 
        onAddCard={this.addCard} 
        onRelocateCard={this.onRelocateCard} 
      />
    );
  }
}

const mapStateToProps = state => {
  const { columns, cards } = state.toJS();
  return { columns, cards };
}

const mapDispatchToProps = dispatch => ({
  addColumn: payload => dispatch(addColumn(payload)),
  addCard: payload => dispatch(addCard(payload)),
  changeColumnId: payload => dispatch(changeColumnId(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
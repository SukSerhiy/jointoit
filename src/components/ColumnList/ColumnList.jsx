import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Muuri from 'muuri';
import $ from 'jquery';
import Column from '../Column';

class ColumnList extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      })
    ),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      })
    ),
    onAddCard: PropTypes.func,
    onRelocateCard: PropTypes.func
  };

  onRelocateCard = (cardId, newColumnId) => {
    const { cards, onRelocateCard } = this.props;
    const card = cards.find(c => c.id === cardId);
    if (card.columnId !== newColumnId) {
      //onRelocateCard(cardId, newColumnId);
    }
  }

  componentDidUpdate() {
    this.muuriInit();
  }

  muuriInit = () => {
    $(document).ready(() => {
      var itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
      var columnGrids = [];
      var boardGrid;

      // Define the column grids so we can drag those
      // items around.
      itemContainers.forEach(container => {

        // Instantiate column grid.
        var grid = new Muuri(container, {
          items: '.board-item',
          layoutDuration: 400,
          layoutEasing: 'ease',
          dragEnabled: true,
          dragSort:  () => columnGrids,
          dragSortInterval: 0,
          dragContainer: document.body,
          dragReleaseDuration: 400,
          dragReleaseEasing: 'ease'
        })
        .on('dragStart', item => {
          // Let's set fixed widht/height to the dragged item
          // so that it does not stretch unwillingly when
          // it's appended to the document body for the
          // duration of the drag.
          item.getElement().style.width = item.getWidth() + 'px';
          item.getElement().style.height = item.getHeight() + 'px';
        })
        .on('dragReleaseEnd', item => {
          // Let's remove the fixed width/height from the
          // dragged item now that it is back in a grid
          // column and can freely adjust to it's
          // surroundings.
          item.getElement().style.width = '';
          item.getElement().style.height = '';
          // Just in case, let's refresh the dimensions of all items
          // in case dragging the item caused some other items to
          // be different size.
          columnGrids.forEach(grid => {
            grid.refreshItems();
          });
          const itemId = item.getElement().id;
          const gridId = item.getGrid().getElement().id;
          this.onRelocateCard(itemId, gridId)
        })
        .on('layoutStart', () => {
          // Let's keep the board grid up to date with the
          // dimensions changes of column grids.
          boardGrid.refreshItems().layout();
        });

        // Add the column grid reference to the column grids
        // array, so we can access it later on.
        columnGrids.push(grid);

      });

      // Instantiate the board grid so we can drag those
      // columns around.
      boardGrid = new Muuri('.board', {
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSortInterval: 0,
        dragStartPredicate: {
          handle: '.board-column-header'
        },
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
      })
    })
  }

  render() {
    const { columns, onAddCard, cards } = this.props;
    return (
      <div className='board'>
        {columns.map((column, key) => {
          const cardsOfColumn = cards.filter(c => c.columnId === column.id);
          return (
            <Column 
              key={key} 
              column={column} 
              cards={cardsOfColumn} 
              onAddCard={onAddCard} 
            />)
        })}
      </div>
    );
  }
}

export default ColumnList;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'element-react';

class ItemAdder extends Component {
  static propTypes = {
    onEnter: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    name: null,
    isAdding: false
  };

  onNameChange = v => {
    this.setState({ name: v });
  }

  onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onEnter();
    }
  }

  onEnter = () => {
    const { onEnter } = this.props;
    const { name } = this.state;
    this.setState({ isAdding: false });
    onEnter({ name });
  }

  onAddItemClick = () => {
    this.setState({ 
      isAdding: true, 
      name: null 
    }, () => {
      this.inputRef.current.focus();
    });
  }

  render() {
    const { name, isAdding } = this.state;
    return (<div 
      className='column-adder' 
      onKeyPress={this.onInputKeyPress} 
    >
      {isAdding ? 
        (<Input 
          ref={this.inputRef}
          value={name} 
          onChange={this.onNameChange} 
          onBlur={this.onEnter}
        />) :
        (<Button 
          className='add-column-button' 
          onClick={this.onAddItemClick}
        >
          <span>Add column</span>
        </Button>)
      }
    </div>);
  }
}

export default ItemAdder;
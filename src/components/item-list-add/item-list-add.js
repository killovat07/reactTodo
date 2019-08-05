import React, { Component } from 'react';

import './item-list-add.css';

export default class ItemListAdd extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value.toUpperCase()
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {

    return (
      <form className="item-add-form d-flex" onSubmit={ this.onSubmit }>
        <input type="text" 
         className="form-control"
         onChange={this.onLabelChange}
         placeholder="New todo" 
         value={ this.state.label } />
        <button type="button"
                className="btn btn-primary btn-md float-right">
        Add Item
        </button>
      </form>
    );
  };
}


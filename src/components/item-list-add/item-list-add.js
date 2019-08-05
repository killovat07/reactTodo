import React, { Component } from 'react';

import './item-list-add.css';

export default class ItemListAdd extends Component {

  render() {
    const { onAddItem } = this.props;

    return (
        <button type="button"
                className="btn btn-primary btn-lg float-right"
                onClick={ () => onAddItem('Hello world') }>
          <i className="fa fa-plus" />
        </button>
    );
  };
}


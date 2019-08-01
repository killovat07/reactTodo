import React, { Component } from 'react';

import './item-list-add.css';

export default class ItemListAdd extends Component {

  state = {
    done: false,
    important: false
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    return (
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
    );
  };
}


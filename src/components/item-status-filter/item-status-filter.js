import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]

  render() {
    const { onfilter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = onfilter === name;
      console.log(onfilter)
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary' 
      return (
      <button type="button"
          className={`btn ${clazz}`} key={name} onClick={() => onFilterChange(name)}>{label}</button>
      );
    });
    
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

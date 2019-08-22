import React from 'react';

const SearchPanel = () => {
      return (
      <div class="top-panel d-flex">
        <input placeholder="search" />
        <div class="btn-group">
            <button type="button" class="btn btn-info">All</button>
            <button type="button" class="btn btn-outline-secondary">Active</button>
            <button type="button" class="btn btn-outline-secondary">Done</button>
        </div>
      </div>
      )
};

export default SearchPanel;
import React from 'react';

const ItemAdd = () => {
    return (
        <div className="item-add-form d-flex">
            <form className="item-add-form d-flex">
                <input type="text" className="form-control" placeholder="New todo"/>
                <button type="button" className="btn btn-primary btn-md float-right">Add Item</button>
            </form>
        </div>
    );
};

export default ItemAdd;
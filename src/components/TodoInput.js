import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        const btn = {
            borderRadius: "10px",
            marginTop: "8px"
        }

        return (
                <div className="card card-body my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-info text-white">
                                    <i  className="fas fa-book"></i>
                                </div>
                            </div>
                            <input type="text" 
                            className="form-control text-capitalize"
                            placeholder="Add To-do Item"
                            value={item}
                            onChange={handleChange}/>
                        </div>
                        <MDBBtn style={btn} className="btn btn-block" 
                        color={editItem ? "warning" : "default"} type="submit" >
                            {editItem ? 'Update Item' : 'Add Item'}</MDBBtn>
                    </form>
                </div>
        )
        
    }
}

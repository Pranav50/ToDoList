import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { MDBBtn } from 'mdbreact'

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        const btn = {
            borderRadius: "10px"
        }

        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">To Do List</h3>
                    {
                        items.map(item => {
                            return (
                                <TodoItem 
                                key={item.id} 
                                title={item.title}
                                handleDelete={()=> handleDelete(item.id)}
                                handleEdit={()=> handleEdit(item.id)}
                                />
                            );
                            
                        })
                    }

                    <MDBBtn style={btn} onClick={clearList} color="danger" className="btn btn-block" type="submit" >Clear List</MDBBtn>
                </ul>
            </div>
        )
    }
}

import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from "uuid";

class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
   }

   componentDidMount = () => {
    const listItems = localStorage.getItem('item')
    this.setState({items: JSON.parse(listItems) ? JSON.parse(listItems) : []})
  }

   handleChange = e => {
    this.setState({
      item: e.target.value
    });
   };

   handleSubmit = (e) => {
      e.preventDefault();

      const newItem = {
        id: this.state.id,
        title:this.state.item
      }

      const updatedItems = [...this.state.items, newItem];

      if(newItem.title === '') {
        return
      } else {
        localStorage.setItem('item', JSON.stringify(updatedItems))
      }

      this.setState({
        items:updatedItems,
        item:'',
        id:uuid(),
        editItem:false
      });
   };

  clearList = () => {
    this.setState({
      items:[]
    }, () => localStorage.setItem('item', JSON.stringify(this.state.items)))
  }

  handleDelete = (id) => {
    console.log('SUBMIT', id)

    const filteredItems = this.state.items.filter(item => 
        item.id !== id)
    this.setState({
      items: filteredItems
    },
    () => {
      localStorage.setItem('item', JSON.stringify(this.state.items))
    }
    )
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => 
      item.id!== id);

      const selectedItem = this.state.items.find(item => item.id === id);
      console.log(selectedItem)

      this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
        id:id
      })
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center"><strong>ToDo Input</strong></h3>
                  <TodoInput 
                  item = { this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}/>
                  <TodoList 
                  items={this.state.items} 
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}/>
              </div>
          </div>
      </div>
    )
  }

}

export default App;

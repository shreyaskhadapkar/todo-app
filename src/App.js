import React , { Component } from 'react';
import Addtask from './Addtask'
import Task from './Task'

class App extends Component {
  state = {
    ToDo : []
  };

  Add = e => {
    let newTask = [...this.state.ToDo,e];
    this.setState({
      ToDo : newTask
    });
  };

  Del = e => {
    let newList = this.state.ToDo.filter( Task => {
      return Task.id !== e;
    });
    this.setState({
      ToDo : newList
    });
  };
  render(){
      return (
      <div className="App container text-center">
        <h1 className="my-4 py-4 text-primary">To-Do List</h1>
        <Task todo = {this.state.ToDo} del = {this.Del}/>
        <Addtask addTask = {this.Add}/>
      </div>
    );
  }
}

export default App;

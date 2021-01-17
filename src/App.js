import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import Header from './components/layout/Header';
import './App.css';
import {v4 as uuidv4 } from 'uuid';

class App extends Component {
  
  state = {
    todos:[
      {
        id:uuidv4(),
        title:"Pay Credit Card Bills",
        done:false
      },
      {
        id:uuidv4(),
        title:"Buy Medicines",
        done:false
      },
      {
        id:uuidv4(),
        title:"Update Resume",
        done:true
      },
    ],
    searchWord:"",
  }
  
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map((todo)=> {
      if(todo.id === id)
        todo.done=!todo.done
      return todo;
    })});
  }

  delTodo = (id) =>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]});
  }
  
  addTodo = (title) =>{
    const newTodo = {
      id:uuidv4(),
      title:title,
      done:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  onChange = (e) => {
    this.setState({searchWord: e.target.value});
}


  dynamicSearch = () =>{
    return this.state.todos.filter(todo=> todo.title.toLowerCase().includes(this.state.searchWord.toLowerCase()));
  }
  render(){
  return (
      <div className="container">
      <div className="col-lg-6 mx-auto">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos= {this.dynamicSearch()} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        <SearchBar searchWord={this.state.searchWord} onChange = {this.onChange}/>
      </div> 
      </div>

    
  );
  }
}

export default App;

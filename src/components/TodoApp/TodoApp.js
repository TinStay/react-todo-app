import React,{ Component, PureComponent } from 'react';
import Submitbar from '../Submitbar';
import Todos from '../TodoApp/Todos';
import Searchbar from './Searchbar/Searchbar';
import { Button } from 'react-bootstrap';

class TodoApp extends PureComponent{
    state = {
        todos: [
          { text: "Do the laundary", isDone:false, id:'1'},
          { text: "Do dishes", isDone:false, id:'2'},
          { text: "Buy groceries", isDone:false, id:'3'},
          { text: "Fuck hoes", isDone:false, id:'4'},
          { text: "Spend some time with your family", isDone:false, id:'5'},
          { text: "Take the dog out for a walk", isDone:false, id:'6'}
        ],
        search: '',
        showTodos: true,
    }

    deleteTodoHandler = (todoIndex) =>{
        const todos = [...this.state.todos];
        
        //Deletes the element at the index
        todos.splice(todoIndex, 1);
        this.setState(
          {todos: todos}
        );
      }

    crossOutHandler = (index) =>{
      

      let todos = [...this.state.todos];
      let item = todos[index];
      let done = item.isDone;
      
      item.isDone = !done;
      todos[item] = item;
      this.setState(
        {todos: todos}
      )
    };

    addEntryHandler = (e) =>{
      e.preventDefault();

      if(e.target.input.value !== ""){
          // Create a new entry
        let newTask = document.getElementById('input');
        let newEntry = {text: newTask.value, isDone: false, id:Date.now()};
        
        // Copy the existing todos in a new array
        let todos = [...this.state.todos];

        // Add the entry into the array
        todos.push(newEntry);

        // Change the state with the new array
        this.setState(
          {todos: todos}
        )
        // Clear the input field
        document.getElementById('input').value = null;
      };
      
    };

    showTodos = (e) =>{
      e.preventDefault();

      let areShown = this.state.showTodos;
      this.setState({ showTodos: !areShown }); 
    };


    searchEntryHandler = (e) =>{
      this.setState(
        {search: e.target.value}
      );
    };
 

    render(){

      
      
      let todos = null;
      let showButton = '';
      let btnBgc = 'dark';
      const btn = document.getElementById('showBtn');

      // Gets the number of undone todos
      let numOfTodos = this.state.todos.filter(todo=>{
        return todo.isDone == false
      }).length;

      // The message that will be display
      let msg= `You have ${numOfTodos} tasks left to do.`; // base case
      

      if(this.state.showTodos === true){
        todos = (<Todos 
          todos={this.state.todos}
          search={this.state.search}
          delete ={this.deleteTodoHandler}
          crossOut={this.crossOutHandler}/>)
          showButton = 'Hide todos';
          
          
      }else{
        showButton = 'Show todos';
        btnBgc = 'warning'
      };
      
      let styleOfMsg = {
        fontSize: '20px',
        color: '#686de0',
        margin: '15px'
      }

        return(
            <div>
                <Submitbar 
                addEntry={this.addEntryHandler}/>
                <br />
                
                <div><Searchbar searchEntry = {this.searchEntryHandler}/>
                <div style={styleOfMsg}>{msg}</div>
                <Button onClick={this.showTodos} id="showBtn"
                     className='mr-0' style={{boxShadow:'none'}} variant={btnBgc}>{showButton}</Button></div>
                {todos}
            </div>
        );
    }
};


export default TodoApp;
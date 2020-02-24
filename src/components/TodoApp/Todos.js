import React, {Component} from 'react';
import Todo from './Todo';
import './Todos.css';

const searchingFor = search =>{
    return todo => {
        return todo.text.toLowerCase().includes(search.toLowerCase());
    }
};

class Todos extends Component{
    render(){       
        return(
            <div className="Todos">
                {this.props.todos.filter(searchingFor(this.props.search)).map((todo,index) => {
                return(
                        <Todo 
                        delete={() => this.props.delete(index)}
                        text={todo.text}
                        isDone={todo.isDone}
                        crossOut={() => this.props.crossOut(index)}
                        key={todo.id}/>
                )
            }) }
            </div>
        ) 
        // this.props.todos.map((todo,index) => {
        //     return(
        //         <div className="Todos">
        //             <Todo 
        //             delete={() => this.props.delete(index)}
        //             text={todo.text}
        //             isDone={todo.isDone}/>
        //         </div>
        //     )
        // })
    }
}


export default Todos;


import React from 'react';
import './Todo.css';
import { Button } from 'react-bootstrap';

const Todo = ( props ) =>{

    let assignedClasses= ['task'];


    if(props.isDone === true){
            assignedClasses.push('line-through');       
      
    };

    

    return(
        <div className='Todo'>   
                <div>
    <h5 onClick={props.crossOut} className={assignedClasses.join(' ')}>{props.text}
                    </h5>
                    <Button onClick={props.delete}
                     className='deleteBtn' variant="danger">X</Button>
                     </div>                   
        </div>
    );
};


export default Todo;
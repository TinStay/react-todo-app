import React from 'react';
import './Submitbar.css';

const Submitbar = ( props ) =>{
    return(
        <div className='Submitbar'>
            <form onSubmit={props.addEntry}>
                <input id='input' type='text' className='input' placeholder="Enter a new task" />
                <button className='Submitbtn' type="submit">Add</button>
            </form>
        </div>
    );
};


export default Submitbar;


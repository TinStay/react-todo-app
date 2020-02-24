import React from 'react';
import './Searchbar.css';

const Searchbar = ( props ) =>{
    return(
        <div >
            <form>
                <input onChange={props.searchEntry} 
                id='' type='text' className='Searchbar' 
                placeholder="Search tasks" />
            </form>
        </div>
    );
};


export default Searchbar;

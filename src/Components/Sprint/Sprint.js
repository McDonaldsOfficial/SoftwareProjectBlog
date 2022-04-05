import * as React from 'react'
import './Sprint.css'
const Sprint = ({number,image,content}) =>{
    return (
        <div className='SPC'>
            <img src={image}/>
            <h3>Sprint {number}</h3>
            <p>{content}</p>
        </div>
    );
}
export default Sprint;
import * as React from 'react'
import './Sprint.css'

function redirectPage(url){
    window.location.href = url
}

const Sprint = ({number,image,content,url}) =>{
    return (
        <div className='SPC' onClick={()=>redirectPage(url)}>
            <img src={image}/>
            <h3>Sprint {number}</h3>
            <p>{content}</p>
        </div>
    );
}
export default Sprint;
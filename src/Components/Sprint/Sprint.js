import * as React from 'react'
import './Sprint.css'
import { useNavigate } from "react-router-dom";

const Sprint = ({number,image,content,url}) =>{
    const navigate = useNavigate()
    return (
        <div className='SPC' onClick={()=>{
            if(url === 'w'){
                navigate('../Wait')
                return
            }
            window.location.href = url
        }}>
            <img src={image}/>
            <h3>Sprint {number}</h3>
            <p style={{'fontSize':'20px'}}>{content}</p>
        </div>
    );
}
export default Sprint;
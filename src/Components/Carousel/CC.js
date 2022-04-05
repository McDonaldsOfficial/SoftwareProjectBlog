import React from "react";
import { ReactDOM } from "react";
import Carousel from "react-elastic-carousel"
import Item from './Item'
import './CC.css'
const breakPoints = [
    {width:1,itemsToShow:1},
    {width:981,itemsToShow:2},
    {width:1200,itemsToShow:3},
    {width:1300,itemsToShow:4},
]

const CC = () =>{
    return(        
        <div className="main">
            <p>EQUIPO</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100" version="1.1">
            <line x1="0" y1="0" x2="20" y2="20"    style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            <line x1="20" y1="20" x2="40" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            <line x1="40" y1="0" x2="60" y2="20"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            <line x1="60" y1="20" x2="80" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            <line x1="80" y1="0" x2="100" y2="20"  style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            <line x1="100" y1="20" x2="120" y2="0" style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
            </svg>                   
            <div style={{width:'80%'}}>
                <Carousel breakPoints={breakPoints} >
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>
                    <Item>
                        <img width='140px' height='140px' style={{borderRadius:'50%'}}/>
                        <span>Me encantan los abrazos</span>
                        <b>Gustavo Valda</b>
                        <i>Developer</i>
                    </Item>                 
                </Carousel>
            </div>
        </div>
    )
}

export default CC;
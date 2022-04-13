import * as React from 'react'
import './Wait.css'
import { useNavigate } from "react-router-dom";
const Wait = ({number,image,content,url}) =>{    
    const navigate = useNavigate()
    return (
        <div id='main-wait'>
            <h1>Parece que aún seguimos transcribiendo este Sprint...</h1>
        <svg id="windmill" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M90.5 63.1a40 40 0 1 0-76.4 16.5h72.8a39.9 39.9 0 0 0 3.6-16.4z" fill="#f0f2ff"/>
          <path class="cls-2" d="M11 79.7h78M6.5 79.7H9M91 79.7h2.5"/>
          <path class="cls-3" d="M29.3 35.7a2.1 2.1 0 0 0-.8.2 3.7 3.7 0 0 0-7.3 0 2 2 0 0 0-.8-.2 2.2 2.2 0 0 0 0 4.4h8.9a2.2 2.2 0 0 0 0-4.4z" fill="#fff" stroke="#4550e5" stroke-linejoin="round"/>
          <path class="cls-4" d="M64.5 48.8a1 1 0 0 0 1-1.3l-1.6-4.1a11 11 0 0 0-4.6-5.5l-6-3.7a1 1 0 0 0-1 0l-6 3.7a11 11 0 0 0-4.5 5.5l-1.5 4a1 1 0 0 0 .9 1.4z"/>
          <path class="cls-2" d="M64.5 48.8a1 1 0 0 0 1-1.3l-1.6-4.1a11 11 0 0 0-4.6-5.5l-6-3.7a1 1 0 0 0-1 0l-6 3.7a11 11 0 0 0-4.5 5.5l-1.5 4a1 1 0 0 0 .9 1.4z"/>
          <path class="cls-4" d="M41 48.8h23.5v3.8H41z"/>
          <path class="cls-2" d="M41 48.8h23.5v3.8H41z"/>
          <path class="cls-4" d="M69 72.8a1 1 0 0 0 .9-1.5 31 31 0 0 1-4-15.1v-2.6a1 1 0 0 0-1-1H40.6a1 1 0 0 0-1 1v2.6a30.9 30.9 0 0 1-4 15.1 1 1 0 0 0 1 1.5z"/>
          <path class="cls-2" d="M69 72.8a1 1 0 0 0 .9-1.5 31 31 0 0 1-4-15.1v-2.6a1 1 0 0 0-1-1H40.6a1 1 0 0 0-1 1v2.6a30.9 30.9 0 0 1-4 15.1 1 1 0 0 0 1 1.5z"/>
          <path class="cls-5" d="M37.5 72.8H68v6.8H37.5z"/>
          <path class="cls-2" d="M37.5 72.8H68v6.8H37.5z"/>
          <rect class="cls-4" x="43" y="61.6" width="6" height="7.5" rx="1" ry="1"/>
          <path class="cls-5" d="M48 61.6h-4a1 1 0 0 0-1 1v5.5a1 1 0 0 0 .6 1z"/>
          <rect class="cls-2" x="43" y="61.6" width="6" height="7.5" rx="1" ry="1"/>
          <path class="cls-2" d="M43 65.4h6M46 61.6v7.6"/>
          <path d="M61 79.7h-4.5v-3a2.3 2.3 0 0 1 2.3-2.3 2.3 2.3 0 0 1 2.2 2.3z" fill="#d6daff" stroke-linecap="round" stroke="#4550e5" stroke-linejoin="round"/>
          <path class="cls-2" d="M43.5 79.7v-3.8M50.5 79.7v-3.8"/>
          <g class="windmills">
            <animateTransform attributeName="transform" type="rotate" from="0 53 42.5" to="360 53 42.5" dur="10s" repeatDur="indefinite"/>
            <path class="cls-2" d="M49.2 38.9l5.2-5.2a1 1 0 0 0 0-1.5L42.8 20.6a1 1 0 0 0-1.4 0l-4 4a1.8 1.8 0 0 0 0 2.5l30.7 30.6a1.8 1.8 0 0 1 0 2.6l-4 4a1 1 0 0 1-1.4 0L51.1 52.5a1 1 0 0 1 0-1.4l5.2-5.2"/>
            <path class="cls-2" d="M49.2 46L44 40.8a1 1 0 0 0-1.4 0L31 52.4a1 1 0 0 0 0 1.4l4 4a1.8 1.8 0 0 0 2.5 0L68 27a1.8 1.8 0 0 1 2.5 0l4 4a1 1 0 0 1 .3.7 1 1 0 0 1-.3.7L63 44a1 1 0 0 1-1.4 0l-5.2-5.2"/>
            <path class="cls-7" d="M68 60.3l-1.2 1.2-13-13 2.5-2.5 11.8 11.7a1.8 1.8 0 0 1 0 2.6zM51.8 36.4l-2.6 2.5L37.5 27a1.8 1.8 0 0 1 0-2.5l1.2-1.3zM35 57.7l-1.3-1.2 13-13 2.5 2.5-11.7 11.7a1.8 1.8 0 0 1-2.6 0zM58.9 41.4L56.3 39 68.1 27a1.8 1.8 0 0 1 2.5 0l1.3 1.3z"/>
            <path class="cls-2" d="M57 58.5l3.4-3.4M60.4 61.9l3.4-3.4M53.6 55.1l3.4-3.4M45.2 29.8l3.4-3.4M48.6 33.1l3.4-3.3M41.8 26.4l3.4-3.4M68.8 38.2l-3.4-3.4M65.5 41.6l-3.4-3.4M72.2 34.9l-3.4-3.4M39.9 50.2l-3.4-3.4M36.6 53.6l-3.4-3.4M43.3 46.8l-3.4-3.3"/>
          </g>
          <rect class="cls-7" x="50.5" y="40.2" width="4.5" height="4.5" rx="1" ry="1"/>
        </svg>
        <button onClick={()=> navigate(-1)}>Página principal</button>
        </div>
    );
}
export default Wait;
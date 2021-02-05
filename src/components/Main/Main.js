import React from 'react';
import img from '../img/Welcome-Image-1-0.png';
import './main.scss'

export default function Main() {
    return (
        <div className='main-container'>
            <img src={img} />
            <h3>To Cursor</h3>
        </div>
    );
}
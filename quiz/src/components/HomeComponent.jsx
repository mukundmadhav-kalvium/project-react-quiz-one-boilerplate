import React, { Component } from 'react';
import './HomeComponent.css';
import '../index.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className='main-container-home'>
                <h2>Quiz App</h2>
                <button className='play-btn'>Play</button>
            </div>
        );
    }
}

export default HomeComponent;
import React, { Component } from 'react';
import './QuizComponent.css'
import '../index.css';

class QuizComponent extends Component {
    render() {
        return (
            <div className="main-container-quiz">
                <div className='quiz-container'>
                <h1>Question</h1>
                <p id='question-number'>1 of 15</p>
                <p id='question'>Which is the only mammal that can jump?</p>
                <div className="option-div">
                    <button className='options'>Dog</button>
                    <button className='options'>Elephant</button>
                    <button className='options'>Goat</button>
                    <button className='options'>Lion</button>
                </div>
                <div className="navigation-options">
                    <button className='nav-opt' id='previous-btn'>Previous</button>
                    <button className='nav-opt' id='next-btn'>Next</button>
                    <button className='nav-opt' id='quit-btn'>Quit</button>
                </div>
            </div>
            </div>
        );
    }
}

export default QuizComponent;
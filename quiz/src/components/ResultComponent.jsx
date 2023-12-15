import React, { Component } from 'react';
import './ResultComponent.css';
import '../index.css';

class ResultComponent extends Component {
    render() {
        return (
            <div className='main-container-result'>
                <h2 id='result-heading'>Result</h2>
                <div className='result-container'>
                    <h3 id='result-practice-heading'>You need more practice!</h3>
                    <h1 id='result-score-heading'>Your score is 20%</h1>
                    <div className='result-div'>
                        <div className='result-total-questions result-sub-divs'>
                            <h4 id='total-questions'>Total number of questions</h4>
                            <h4 id='total-number-of-questions'>15</h4>
                        </div>

                        <div className="result-attempted-questions result-sub-divs">
                            <h4 id='attempted-questions'>Number of attempted questions</h4>
                            <h4 id='number-of-attempted-questions'>9</h4>
                        </div>

                        <div className="result-correct-answers result-sub-divs">
                            <h4 id='correct-answers'>Number of correct answers</h4>
                            <h4 id='number-of-correct-answers'>3</h4>
                        </div>

                        <div className="result-wrong-answers result-sub-divs">
                            <h4 id='wrong-answers'>Number of wrong answers</h4>
                            <h4 id='number-of-wrong-answers'>6</h4>
                        </div>
                    </div>
                </div>
                <div className="result-option-div">
                <button id='play-again-btn'>Play Again</button>
                <button id='back-to-home-btn'>Back to home</button>
                </div>
            </div>
        );
    }
}

export default ResultComponent;
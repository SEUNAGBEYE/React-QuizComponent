import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

/**
 * Quiz Component
 *
 * @class Quiz
 * @extends {Component}
 */
class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    /**
     * Updates quiz_questions in state
     *
     * @returns {void}
     * @memberof Quiz
     */
    showNextQuestion = () => {
        this.setState((state) => {
            return {
                quiz_position: state.quiz_position + 1
            }
        })
    }

    /**
     * Renders Quiz Component
     *
     * @returns {JSX}
     * @memberof Quiz
     */
    render() {
        const isQuizEnd = this.state.quiz_position -1 === quizData.quiz_questions.length
        return (
            <div>
                { !isQuizEnd ?
                    <QuizQuestion 
                        quiz_question={quizData.quiz_questions
                        [this.state.quiz_position - 1]}
                        showNextQuestionHandler={this.showNextQuestion}
                    />
                : <QuizEnd/>
                }
            </div>
        )
    }
}

export default Quiz;
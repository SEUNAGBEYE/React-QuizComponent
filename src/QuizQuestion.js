import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    /**
     * Show next question if the correct answer is selected
     *
     * @returns {void}
     * @memberof QuizQuestion
     */
    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }
    }

    /**
     * Renders QuizQuestion Component
     *
     * @returns {JSX}
     * @memberof QuizQuestion
     */
    render(){
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
              {
                    this.props.quiz_question.answer_options.map((answer, index) => <QuizQuestionButton 
                        button_text={answer}
                        key={index}
                        clickHandler={this.handleClick.bind(this)}
                    />)
                }
              </ul>
            </section>
          </main>
        )
    }
}

const propTypes = {
    quiz_question: PropTypes.object.isRequired,
    showNextQuestionHandler: PropTypes.func.isRequired
}

QuizQuestion.propTypes = propTypes;

export default QuizQuestion
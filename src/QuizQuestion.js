import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    render(){
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
              </ul>
            </section>
          </main>
        )
    }
}

const propTypes = {
    quiz_question: PropTypes.object.isRequired
}

QuizQuestion.propTypes = propTypes;

export default QuizQuestion
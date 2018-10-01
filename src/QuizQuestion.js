import React, { Component } from 'react'
import PropTypes from 'prop-types'

class QuizQuestion extends Component {
    render(){
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                <li>{this.props.quiz_question.answer_options[0]}</li>
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
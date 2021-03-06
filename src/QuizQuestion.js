import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }

    /**
     * Show next question if the correct answer is selected
     *
     * @returns {void}
     * @memberof QuizQuestion
     */
    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer){
            this.setState({ incorrectAnswer: false })
            this.props.showNextQuestionHandler()
        } else{
            this.setState({ incorrectAnswer: true })
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
            { this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
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
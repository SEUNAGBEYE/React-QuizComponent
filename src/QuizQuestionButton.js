import React, { Component } from 'react'
import PropTypes from 'prop-types'

class QuizQuestionButton extends Component {

    /**
     * Handles click event
     *
     * @returns {void}
     * @memberof QuizQuestionButton
     */
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }

    /**
     * Renders QuizQuestionButton
     *
     * @returns {JSX}
     * @memberof QuizQuestionButton
     */
    render(){
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }
}

const propTypes = {
    button_text: PropTypes.string.isRequired
}

QuizQuestionButton.propTypes = propTypes;

export default QuizQuestionButton
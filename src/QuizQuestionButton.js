import React, { Component } from 'react'
import PropTypes from 'prop-types'

class QuizQuestionButton extends Component {

    render(){
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )
    }
}

const propTypes = {
    button_text: PropTypes.string.isRequired
}

QuizQuestionButton.propTypes = propTypes;

export default QuizQuestionButton
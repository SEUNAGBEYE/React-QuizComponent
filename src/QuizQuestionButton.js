import React, { Component } from 'react'
import PropTypes from 'prop-types'

class QuizQuestionButton extends Component {

    handleClick = (event) => {
        this.props.clickHandler(this.props.button_text)
    }

    render(){
        return (
            <li>
                <button onClick={this.handleClick}>{this.props.button_text}</button>
            </li>
        )
    }
}

const propTypes = {
    button_text: PropTypes.string.isRequired
}

QuizQuestionButton.propTypes = propTypes;

export default QuizQuestionButton
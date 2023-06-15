import React, { Component } from 'react'

import './SimpleButton.scss'

class SimpleButton extends Component {
    render() {
        return (
            <a className='simple-button' href={this.props.href}>
                {this.props.text}
            </a>
        )
    }
}

export default SimpleButton

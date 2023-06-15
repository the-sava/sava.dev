import React, { Component } from 'react'

import './Invitation.scss'
import 'animate.css'

class Invitation extends Component {
    state = {
        isClosed: false,
        invitationClass: 'invitation animate__animated animate__fadeIn',
        h1Class: 'animated',
    }

    startAnimation = () => {
        setTimeout(() => {
            this.setState({
                isClosed: true,
                invitationClass:
                    'invitation animate__animated animate__fadeOut',
            })
        }, 1100)
    }

    closeInvitation = (e) => {}

    render() {
        this.startAnimation()
        this.closeInvitation()
        return (
            <div
                className={
                    this.state.isClosed ? 'closed' : this.state.invitationClass
                }>
                <p className={this.state.h1Class}>
                    <span className='animate__animated animate__slideInLeft'>
                        &lt;
                    </span>
                    <span>SAVA</span>
                    <span className='animate__animated animate__slideInRight'>
                        &gt;
                    </span>
                </p>
            </div>
        )
    }
}

export default Invitation

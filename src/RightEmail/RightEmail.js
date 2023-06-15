import React, { Component } from 'react'
import { connect } from 'react-redux'

import { motion } from 'framer-motion'

import './RightEmail.scss'

class RightEmail extends Component {
	render() {
		const lineVariants = {
			initial: {
				height: 0
			},
			animated: {
				height: '90px',
				transition: {
					duration: 0.3,
					delay: 0.2
				}
			}
		}
		const emailVariants = {
			initial: {
				opacity: 0
			},
			animated: {
				opacity: 1,
				transition: {
					duration: 0.3,
					delay: 0.5
				}
			}
		}
		return (
			<div className='right-email'>
				<motion.a
					initial='initial'
					animate='animated'
					variants={emailVariants}
					href={this.props.rightEmail.href}>
					{this.props.rightEmail.email}
				</motion.a>
				<motion.div
					className='line'
					initial='initial'
					animate='animated'
					variants={lineVariants}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		rightEmail: state.sideReducer.rightEmail
	}
}

export default connect(mapStateToProps)(RightEmail)

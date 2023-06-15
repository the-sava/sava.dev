import React, { Component } from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import './LeftIcons.scss'

class LeftIcons extends Component {
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
		const iconVariants = {
			initial: {
				y: 30,
				opacity: 0
			},
			animated: i => ({
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.2,
					delay: 0.5 + 0.3 * i
				}
			})
		}
		return (
			<div className='left-icons'>
				{this.props.leftLinks.map((link, index) => {
					return (
						<motion.a
							key={index}
							href={link.href}
							initial='initial'
							animate='animated'
							variants={iconVariants}
							custom={index}
						><i className={link.iconClass}/></motion.a>
					)
				})}
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
		leftLinks: state.sideReducer.leftLinks
	}
}

export default connect(mapStateToProps)(LeftIcons)

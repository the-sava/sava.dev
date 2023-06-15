import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'

import './Greeting.scss'

class Greeting extends Component {
	state = {
		helloClass: 'greeting-hello',
		savaClass: 'greeting-sava',
		aboutClass: 'greeting-about'
	}
	animateGreeting = e => {
		this.setState({
			helloClass: 'greeting-hello' + ' typing-text'
		})
		setTimeout(() => {
			this.setState({
				helloClass: 'greeting-hello',
				savaClass: 'greeting-sava' + ' typing-text'
			})
		}, 800)
		setTimeout(() => {
			this.setState({
				savaClass: 'greeting-sava',
				aboutClass: 'greeting-about' + ' typing-text'
			})
		}, 800)
		setTimeout(() => {
			this.setState({
				aboutClass: 'greeting-about'
			})
		}, 800)
	}

	render() {
		const greetingVariants = {
			initial: {
				y: 200,
				opacity: 0
			},
			animated: {
				y: 0,
				opacity: 1,
				transition: {
					repeat: 0,
					delay: 0.3,
					duration: 0.5
				}
			}
		}
		return (
			<motion.section
				initial='initial'
				whileInView='animated'
				variants={greetingVariants}
				className='greeting'>
				<p className={this.state.helloClass}>Привет, меня зовут</p>
				<p className={this.state.savaClass}>Алексей Савин.</p>
				<p className={this.state.aboutClass}>
					Я занимаюсь разработкой веб-приложений.
				</p>
				<p className='greeting-description'>
					Я разработчик, специализуруюшийся на проектировании, дизайне
					и разработке веб-приложений. Для меня важна эффективность и
					интуитивность моих приложений. Также я уделяю большое
					внимание дизайну и стилю.
				</p>
				<Link
					className='greeting-button'
					activeClass='greeting-button'
					to={'contact'}
					spy={true}
					smooth={true}
					offset={-100}
					duration={300}>
					Связаться со мной
				</Link>
			</motion.section>
		)
	}
}

export default Greeting

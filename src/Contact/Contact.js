import React from 'react'
import { motion } from 'framer-motion'

import SimpleButton from '../Components/SimpleButton/SimpleButton'

import './Contact.scss'

export default function Contact() {
	const contactVariants = {
		initial: {
			y: 200,
			opacity: 0
		},
		animated: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.5,
				ease: 'easeInOut'
			}
		}
	}
	return (
		<motion.div
			id='contact'
			initial='initial'
			whileInView='animated'
			variants={contactVariants}
			className='contact'>
			<span className='contact__description'>04. Что дальше?</span>
			<h2 className='contact__title'>Связаться со мной</h2>
			<p className='contact__text'>
				Although I’m not currently looking for any new opportunities, my
				inbox is always open. Whether you have a question or just want
				to say hi, I’ll try my best to get back to you!
			</p>
			<SimpleButton text='Связаться' href='#' />
		</motion.div>
	)
}

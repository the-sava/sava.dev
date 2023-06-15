import React from 'react'
import { motion } from 'framer-motion'

import Work from './Work/Work'

import './Experience.scss'

export default function Experience() {
	const experienceVariants = {
		initial: {
			y: 50,
			opacity: 0
		},
		animated: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.4
			}
		}
	}
	return (
		<motion.div
			className='experience'
			initial='initial'
			whileInView='animated'
			variants={experienceVariants}>
			<div className='experience__status-bar'>
				<div className='experience__slider'></div>
			</div>
			<ul className='experience__titles'>
				<li>MSK-IX</li>
			</ul>
			<div className='experience__text'>
				<Work
					post='Стажер'
					company='MSK-IX'
					companyHref='#'
					date='Июнь - Август 2020'
				/>
			</div>
		</motion.div>
	)
}

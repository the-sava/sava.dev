import React from 'react'

import { motion } from 'framer-motion'

import './Section.scss'

export default function Section(props) {
	const lineVariants = {
		initial: {
			width: 0
		},
		animated: {
			width: '30%',
			transition: {
				delay: 0.5,
				duration: 0.5
			}
		}
	}
	return (
		<section id={props.id} className='section'>
			<div className='section__top'>
				<span className='digits'>{props.order}</span>
				<span className='left'>&lt;</span>
				<h2 className='section__title section__title_open'>
					{props.title}
				</h2>
				<span className='right'>&gt;</span>
				<motion.div
					className='line'
					initial='initial'
					whileInView='animated'
					variants={lineVariants}
				/>
			</div>
			<div className='section__content'>{props.children}</div>
			<div className='section__bottom'>
				<span className='left'>&lt;/</span>
				<h2 className='section__title section__title_close'>
					{props.title}
				</h2>
				<span className='right'>&gt;</span>
				<motion.div
					className='line'
					initial='initial'
					whileInView='animated'
					variants={lineVariants}
				/>
			</div>
		</section>
	)
}

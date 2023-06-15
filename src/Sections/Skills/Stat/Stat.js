import React from 'react'
import { motion } from 'framer-motion'

import './Stat.scss'

export default function Stat(props) {
	const statVariants = {
		initial: {
			width: '0%'
		},
		animated: {
			width: `${props.procent - 7}%`,
			transition: {
				delay: 0.3,
				duration: 0.7
			}
		}
	}
	return (
		<div className='stat'>
			<div className='stat__title'>{props.title}</div>
			<div className='stat__bar'>
				<motion.div
					initial='initial'
					whileInView='animated'
					variants={statVariants}
					className='stat__procent'
				/>
				<div
					className='stat__digit'
					style={{ width: `${100 - props.procent}%` }}>
					{props.procent + '%'}
				</div>
			</div>
		</div>
	)
}

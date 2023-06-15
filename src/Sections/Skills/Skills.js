import React from 'react'
import { motion } from 'framer-motion'

import Stat from './Stat/Stat'

import './Skills.scss'

export default function Skills(props) {
	const descriptionVariants = {
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
		<div className='skills'>
			<motion.div
				initial='initial'
				whileInView='animated'
				transition='transition'
				variants={descriptionVariants}
				className='skills-description'>
				Я full-stack разработчик из Москвы. Я разрабатываю как
				клиентскую, так и логическую часть приложений. Меня вдохнавляет
				моя работа и качество выпускаемого продукта.
			</motion.div>
			<motion.div
				className='skills-stats'
				transition={{ delayChildren: 0.3 }}>
				<Stat title='HTML' procent='90' />
				<Stat title='CSS' procent='90' />
				<Stat title='JavaScript' procent='80' />
				<Stat title='React' procent='80' />
				<Stat title='Node.js' procent='50' />
				<Stat title='MongoDB' procent='60' />
				<Stat title='SQL' procent='50' />
				<Stat title='UI/UX' procent='50' />
				<Stat title='Figma' procent='30' />
			</motion.div>
		</div>
	)
}

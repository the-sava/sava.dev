import React from 'react'
import { easeIn, motion, transform } from 'framer-motion'

import './About.scss'

export default function About() {
	const textVariants = {
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
	const imgVariants = {
		initial: {
			x: 0,
			y: 0
		},
		transformed: {
			x: -35,
			y: -35
		}
	}
	return (
		<div className='about'>
			<motion.p
				className='about__text'
				initial='initial'
				whileInView='animated'
				variants={textVariants}
				transition={{
					delay: 0.3,
					duration: 0.3
				}}>
				Hello! My name is Brittany and I enjoy creating things that live
				on the internet. My interest in web development started back in
				2012 when I decided to try editing custom Tumblr themes — turns
				out hacking together a custom reblog button taught me a lot
				about HTML & CSS! Fast-forward to today, and I’ve had the
				privilege of working at an advertising agency, a start-up, a
				huge corporation, and a student-led design studio. My main focus
				these days is building accessible, inclusive products and
				digital experiences at Upstatement for a variety of clients. I
				also recently launched a course that covers everything you need
				to build a web app with the Spotify API using Node & React. Here
				are a few technologies I’ve been working with recently:
			</motion.p>
			<div className='about__image'>
				<motion.div
					className='img'
					initial='initial'
					whileInView='transformed'
					exit='transformed'
					variants={imgVariants}
					transition={{
						delay: 0.1,
						duration: 0.2
					}}
				/>
			</div>
		</div>
	)
}

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import './Navigation.scss'
import SimpleButton from '../../Components/SimpleButton/SimpleButton'
import Media from 'react-media'

class Navigation extends Component {
	render() {
		const linkVariants = {
			hidden: index => ({
				opacity: 0
			}),
			visible: index => ({
				opacity: 1,
				transition: {
					delay: 0.5 + index * 0.3,
					duration: 1
				}
			})
		}
		const navVariants = {
			opened: {
				opacity: 1,
				width: '50%'
			},
			closed: {
				opacity: 0,
				width: 0
			}
		}
		return (
			<Fragment>
				<Media
					queries={{
						small: '(max-width: 500px)',
						medium: '(min-width: 501px) and (max-width: 700px)',
						large: '(min-width: 701px)'
					}}>
					{matches => (
						<React.Fragment>
							{matches.small && (
								<motion.nav
									className='header__navigation header__navigation_mobile'
									initial='closed'
									animate='opened'
									exit='closed'
									variants={navVariants}
									transition={{
										duration: 0.2
									}}
									style={{ overflow: 'visible' }}>
									<ul>
										{this.props.links.map((link, index) => {
											return (
												<li key={index}>
													<Link
														activeClass='nav__link_active'
														to={link.href}
														spy={true}
														smooth={true}
														offset={-120}
														duration={300}
														key={index}
														variants={linkVariants}
														initial={'hidden'}
														animate={'visible'}
														custom={index}
														className='nav__link'
														onClick={
															this.props
																.scrollToSection
														}>
														{link.anchor}
													</Link>
												</li>
											)
										})}
									</ul>
									<SimpleButton text='Резюме' href='#' />
								</motion.nav>
							)}
							{matches.medium && (
								<motion.nav
									className='header__navigation header__navigation_tablet'
									initial='closed'
									animate='opened'
									exit='closed'
									variants={navVariants}
									transition={{
										duration: 0.2
									}}
									style={{ overflow: 'visible' }}>
									<ul>
										{this.props.links.map((link, index) => {
											return (
												<li key={index}>
													<Link
														activeClass='nav__link_active'
														to={link.href}
														spy={true}
														smooth={true}
														offset={-120}
														duration={300}
														key={index}
														variants={linkVariants}
														initial={'hidden'}
														animate={'visible'}
														custom={index}
														className='nav__link'
														onClick={
															this.props
																.scrollToSection
														}>
														{link.anchor}
													</Link>
												</li>
											)
										})}
									</ul>
									<SimpleButton text='Резюме' href='#' />
								</motion.nav>
							)}
							{matches.large && (
								<nav className='header__navigation header__navigation_desktop'>
									{this.props.links.map((link, index) => {
										return (
											<Link
												activeClass='nav__link_active'
												to={link.href}
												spy={true}
												smooth={true}
												offset={-120}
												duration={300}
												key={index}
												variants={linkVariants}
												initial={'hidden'}
												animate={'visible'}
												custom={index}
												className='nav__link'>
												{link.anchor}
											</Link>
										)
									})}
								</nav>
							)}
						</React.Fragment>
					)}
				</Media>
			</Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		links: state.navigationReducer.links,
		navigationVariants: state.navigationReducer.linkVariants
	}
}

export default connect(mapStateToProps)(Navigation)

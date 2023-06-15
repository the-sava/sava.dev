import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'
import { motion, AnimatePresence } from 'framer-motion'

import Navigation from './Navigation/Navigation'
import Blur from '../Components/Blur/Blur'
import SimpleButton from '../Components/SimpleButton/SimpleButton'
import BurgerButton from '../Components/BurgerButton/BurgerButton'

import './Header.scss'

import logo from '../assets/img/logo.png'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			burgerClass: 'hamburger hamburger--collapse',
			isOpen: false
		}
	}

	toggleNav = () => {
		this.setState({
			burgerClass: !this.state.isOpen
				? 'hamburger hamburger--collapse is-active'
				: 'hamburger hamburger--collapse',
			isOpen: !this.state.isOpen
		})
		if (!this.state.isOpen) document.body.classList.add('modal')
		else document.body.classList.remove('modal')
	}

	scrollToSection = () => {
		document.body.classList.remove('modal')
		this.setState({
			burgerClass: 'hamburger hamburger--collapse',
			isOpen: false
		})
	}

	render() {
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
								<header className='header header_mobile'>
									<a href='#' className='header__logo'>
										S
									</a>
									<BurgerButton
										burgerClass={this.state.burgerClass}
										toggleNav={this.toggleNav}
									/>
									<AnimatePresence>
										{this.state.isOpen && (
											<Navigation
												scrollToSection={
													this.scrollToSection
												}
											/>
										)}
									</AnimatePresence>
									<AnimatePresence>
										{this.state.isOpen && <Blur />}
									</AnimatePresence>
								</header>
							)}
							{matches.medium && (
								<header className='header header_tablet'>
									<a href='#' className='header__logo'>
										S
									</a>
									<BurgerButton
										burgerClass={this.state.burgerClass}
										toggleNav={this.toggleNav}
									/>
									<AnimatePresence>
										{this.state.isOpen && (
											<Navigation
												scrollToSection={
													this.scrollToSection
												}
											/>
										)}
									</AnimatePresence>
									<AnimatePresence>
										{this.state.isOpen && <Blur />}
									</AnimatePresence>
								</header>
							)}
							{matches.large && (
								<header className='header header_desktop'>
									<motion.a href='#' className='header__logo'>
										S
									</motion.a>
									<Navigation
										scrollToSection={this.scrollToSection}
									/>
									<SimpleButton href='#' text='Резюме' />
								</header>
							)}
						</React.Fragment>
					)}
				</Media>
			</Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps)(Header)

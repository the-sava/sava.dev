import React, { Component, Fragment } from 'react'

import Invitation from './Invitatition/Invitation'
import Header from './Header/Header'
import LeftIcons from './LeftIcons/LeftIcons'
import RightEmail from './RightEmail/RightEmail'
import Greeting from './Greeting/Greeting'
import Section from './Sections/Section'
import About from './Sections/About/About'
import Skills from './Sections/Skills/Skills'
import Experience from './Sections/Experience/Experience'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import './App.scss'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<LeftIcons />
				<RightEmail />
				<div className='content'>
					<Greeting />
					<Section id='about' title='Обо мне' order='01.'>
						<About />
					</Section>
					<Section id='skills' title='Мои навыки' order='02.'>
						<Skills />
					</Section>

					<Section name='experience' title='Опыт работы' order='03.'>
						<Experience />
					</Section>
					<Contact />
					<Footer savaHref='#' versionHref='https://github.com/the-sava/sava.dev' />
				</div>
			</Fragment>
		)
	}
}

export default App

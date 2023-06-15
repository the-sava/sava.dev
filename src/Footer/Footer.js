import React from 'react'

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded'

import './Footer.scss'

export default function Footer(props) {
	return (
		<footer className='footer'>
			<a className='footer__sava' href={props.savaHref}>
				Designed & Developed by Sava
			</a>
			<a href={props.versionHref} className='footer__version'>
				v1.0
			</a>
		</footer>
	)
}

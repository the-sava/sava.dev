import logo from '../../assets/img/logo.png'

const initialState = {
	links: [
		{ anchor: 'Обо мне', href: 'about' },
		{ anchor: 'Мои навыки', href: 'skills' },
		{ anchor: 'Опыт работы', href: 'experience' }
	],
	linkVariants: {
		hidden: {
			x: -1000
		},
		visible: {
			x: 0
		}
	}
}

export default function headerReducer(state = initialState, action) {
	return state
}

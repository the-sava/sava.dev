const initialState = {
    leftLinks: [
        { iconClass: 'fa fa-vk', href: 'https://vk.com/thereealsava' },
        { iconClass: 'fa fa-instagram', href: '' },
        { iconClass: 'fa fa-telegram', href: 'https://t.me/the_savaa' },
        { iconClass: 'fa fa-github', href: 'https://github.com/the-sava' },
    ],
    rightEmail: {
        email: 'the-sava.dev@yandex.ru',
        href: 'mailto:the-sava.dev@yandex.ru',
    },
}

export default function sideReducer(state = initialState, action) {
    return state
}

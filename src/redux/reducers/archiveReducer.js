import React from 'react'

const initialState = {
    top: {
        title: 'Архив проектов',
        description: 'Полный список проектов над которыми я работал.',
    },
    content: {
        header: [
            'Год',
            'Название',
            'Стадия разработки',
            'Технологии',
            'Ссылки',
        ],
        items: [
            {
                field_1: '2021',
                field_2: 'СОЮЗ',
                field_3: 'Поддержка',
                field_4: 'React, Redux, Tailwind',
                field_5: '',
            },
            {
                field_1: '2022',
                field_2: 'СОЮЗ',
                field_3: 'Поддержка',
                field_4: 'React, Redux, Tailwind',
                field_5: '',
            },
            {
                field_1: '2023',
                field_2: 'СОЮЗ',
                field_3: 'Работа завершена',
                field_4: 'React, Redux, Tailwind',
                field_5: (
                    <React.Fragment>
                        <a href='#' className='fa fa-github'></a>
                        <a href='#' className='fa fa-external-link'></a>
                    </React.Fragment>
                ),
            },
            {
                field_1: '2024',
                field_2: 'СОЮЗ',
                field_3: 'Поддержка',
                field_4: 'React, Redux, Tailwind',
                field_5: '',
            },
            {
                field_1: '2025',
                field_2: 'СОЮЗ',
                field_3: 'Поддержка',
                field_4: 'React, Redux, Tailwind',
                field_5: '',
            },
        ],
    },
}

export default function archiveReducer(state = initialState, action) {
    return state
}

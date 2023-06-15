import React from 'react'

import './Work.scss'

export default function Work(props) {
  return (
    <div className="work">
        <span className="work__post">
          {props.post}
          <a href={props.companyHref} className="work__company">@{props.company}</a>
        </span>
        <span className="work__date">{props.date}</span>
        <ul className="work__description">
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
        </ul>
    </div>
  )
}

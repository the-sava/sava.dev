import React from 'react'

import './BurgerButton.scss'


export default function BurgerButton (props) {
  return (
    <button onClick={props.toggleNav} className={props.burgerClass} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
        // <button className={props.class} onClick={props.toggleNav}>
        //     <span></span>
        // </button>
  )
}

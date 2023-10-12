import React from 'react'

import s from './Button.module.scss'

function Button({ text, styles }) {

  return (
    <button className={s.button} style={styles}>{text}</button>
  )
}

export default Button
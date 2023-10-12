import React from 'react'
import s from './HeaderWidget.module.scss'
import Image from 'next/image'

function HeaderWidget({ value, iconSrc }) {
  return (
    <div className={s.widgetWrapper}>
        <Image src={iconSrc} width={24} height={24} alt='widget-icon'/>
        {value}
    </div>
  )
}

export default HeaderWidget
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Contact() {
  let {themeStyle}=useContext(ThemeContext)
  return (
    <div className={themeStyle}>
      contact
    </div>
  )
}

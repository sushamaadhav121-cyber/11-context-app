import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  let {themeStyle}=useContext(ThemeContext)

  
  return (
    <div className={themeStyle}>
      <h1>Hello React</h1>
      <h1>Hello JS</h1>
      <img src="https://cpimg.tistatic.com/09762564/s/4/Taj-Mahal-Rose..jpg" alt="" className='rounded-5'/>
      <h1>Hello React</h1>
      <h1>Hello HTML</h1>
    </div>
  )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Navbar() {
  let { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav class={`navbar navbar-expand-lg bg-${theme}`} data-bs-theme={theme}>
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/contact"}>Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={"/products"}>Product</Link>
              </li>
            </ul>
            <div className='fs-4'>
              {theme==='light'?
              <i class="bi bi-moon" onClick={()=>{setTheme('dark')}}></i>:
              <i class="bi bi-brightness-high text-light" onClick={()=>{setTheme('light')}}></i>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

import React, { useEffect } from 'react'
import "./Nav.css"

function Nav() {
    const [show, setShow] = React.useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setShow(window.scrollY > 100)
      })
    }, [])
    
  return (
    <div className={`nav-container ${show && 'nav-container-black'}`}>
        <img 
            className='nav-logo' 
            alt="Netflix" 
            src='https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png'>
        </img>
        <img className='nav-avatar' alt='chrisdev' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
    </div>
  )
}

export default Nav
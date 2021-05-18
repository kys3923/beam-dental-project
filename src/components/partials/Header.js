import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdMenu, MdClose } from 'react-icons/md'

const Header = (props) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <header>
      <img src='/img/Logo.png' alt='header logo' />
      <nav>
        <ul className={click ? "nav_options active" : "nav_options"}>
          {/* click to pop menu */}
          <li className="option" onClick={closeMenu}>Explore <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          <li className="option" onClick={closeMenu}>Company <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          <li className="option" onClick={closeMenu}>Resources <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          {/* click to change page */}
          <div className="header_buttons">
            <div id="find_dent_wrap"><div className="find_dent"><p>Find a dentist</p></div></div>
            <div id="login_box"><p>Login</p></div>
          </div>
          {/* hamburger menu */}
        </ul>
        <div className="hamburger_menu" onClick={handleClick}>
          {click ? (
            <MdClose className="menu_icon" />
          ) : (
            <MdMenu className="menu_icon" />
          )}
        </div>
      </nav>

    </header>
  );
}
export default Header    
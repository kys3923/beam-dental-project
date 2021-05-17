import { MdKeyboardArrowDown } from 'react-icons/md'

const Header = (props) => {
  return (
    <header>
      <img src='/img/Logo.png' alt='header logo' />
      <nav>
        <ul>
          {/* click to pop menu */}
          <li>Explore <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          <li>Company <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          <li>Resources <span id="down_arrow"><MdKeyboardArrowDown /></span></li>
          {/* click to change page */}
          <div className="header_buttons">
            <div id="find_dent_wrap"><div className="find_dent">Find a dentist</div></div>
            <div id="login_box">Login</div>
          </div>
        </ul>
      </nav>

    </header>
  );
}
export default Header    
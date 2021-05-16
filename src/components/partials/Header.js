const Header = (props) => {
  return (
    <header>
      <img src='/img/Logo.png' alt='header logo' />
      <ul>
        {/* click to hover */}
        <li>Explore</li>
        <li>Company</li>
        <li>Resources</li>
        {/* click to change page */}
        <div>
          <p>Find a dentist</p>
          <p>Login</p>
        </div>
      </ul>

    </header>
  );
}
export default Header    
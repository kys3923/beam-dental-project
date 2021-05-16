const Header = (props) => {
  return (
    <header>
      <h3>Logo Image</h3>
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
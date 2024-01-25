import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar">
        <Link class="headerText navbar-brand" to="/">
          <h3>Student Result Management System</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

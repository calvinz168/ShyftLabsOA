import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar">
        <Link class="headerText navbar-brand" to="/">
          <h2>Student Result Management System</h2>
        </Link>
        <Link class="headerName navbar-brand" target={"_blank"} to="https://www.linkedin.com/in/zheng-calvin/">
          <h2>Calvin Zheng</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

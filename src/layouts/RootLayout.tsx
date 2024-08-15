import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Image to Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;

import { Link, NavLink, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

// const activeClass = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <div className="App">
      <header>
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link> */}

        {/* We can use any custom class for active link in NavLink component */}
        {/* <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/">
          Home
        </NavLink>
        <NavLink className={activeClass} to="/">
          Home
        </NavLink> */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2024</footer>
    </div>
  );
};

export default Layout;

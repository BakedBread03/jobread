import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/coaching">Yu-Gi-Oh! Coaching</NavLink>
    </nav>
  );
}

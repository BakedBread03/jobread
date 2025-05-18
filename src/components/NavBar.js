import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : undefined}>Blog</NavLink>
      <NavLink to="/coaching" className={({ isActive }) => isActive ? 'active' : undefined}>Coaching</NavLink>
    </nav>
  );
}

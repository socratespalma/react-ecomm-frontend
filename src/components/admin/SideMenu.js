import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside class="menu is-hidden-mobile">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/profile">Profile</Link>
        </li>
        <li>
          <Link>Other</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;

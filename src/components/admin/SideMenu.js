import { Link, NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className="menu side-menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            to="/admin/dashboard"
            className="menu__link"
            activeClassName="menu__active"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/admin/profile"
            className="menu__link"
            activeClassName="menu__active"
          >
            Profile
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/admin/products"
            className="menu__link"
            activeClassName="menu__active"
          >
            Productos
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/admin/add-category"
            className="menu__link"
            activeClassName="menu__active"
          >
            Agregar Categoría
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/admin/view-category"
            className="menu__link"
            activeClassName="menu__active"
          >
            Ver Categorías
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;

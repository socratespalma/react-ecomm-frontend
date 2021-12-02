import { NavLink } from 'react-router-dom'

const SideMenu = () => {
	return (
		<aside className='menu side-menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<NavLink to='/admin/dashboard' className='menu__link' activeClassName='menu__active'>
						Dashboard
					</NavLink>
				</li>
				<li className='menu__item'>
					<NavLink to='/admin/profile' className='menu__link' activeClassName='menu__active'>
						Profile
					</NavLink>
				</li>
				<li className='menu__item'>
					<NavLink to='/admin/add-product' className='menu__link' activeClassName='menu__active'>
						Agregar Producto
					</NavLink>
				</li>
				<li className='menu__item'>
					<NavLink to='/admin/view-product' className='menu__link' activeClassName='menu__active'>
						Ver Productos
					</NavLink>
				</li>
				<li className='menu__item'>
					<NavLink to='/admin/add-category' className='menu__link' activeClassName='menu__active'>
						Agregar Categoría
					</NavLink>
				</li>
				<li className='menu__item'>
					<NavLink to='/admin/view-category' className='menu__link' activeClassName='menu__active'>
						Ver Categorías
					</NavLink>
				</li>
			</ul>
		</aside>
	)
}

export default SideMenu

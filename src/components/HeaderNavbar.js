import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'

export default function HeaderNavbar() {
	const [isActive, setActive] = useState(false)
	let BurgerIcon = ''

	const handleToggle = () => {
		setActive(!isActive)
	}

	const RenderBurgerIcon = () => {
		if (isActive) {
			BurgerIcon = <CgClose className='burger__icon' />
		} else {
			BurgerIcon = <VscMenu className='burger__icon' />
		}
	}

	// if (isActive) {
	// 	document.body.style.overflow = 'hidden'
	// } else {
	// 	document.body.style.overflow = 'inherit'
	// }

	RenderBurgerIcon()

	useEffect(() => {
		RenderBurgerIcon()
	})
	return (
		<nav className={`nav-bar ${isActive && 'show-menu'}`}>
			<ul className='cat-menu'>
				<li className='cat-menu__item'>
					<NavLink to='/products' className='cat-menu__link' activeClassName='active'>
						Vestidos
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/sombreros' className='cat-menu__link' activeClassName='active'>
						Sombreros
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/mochilas' className='cat-menu__link' activeClassName='active'>
						Mochilas
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/carteras' className='cat-menu__link' activeClassName='active'>
						Carteras
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/faldas' className='cat-menu__link' activeClassName='active'>
						Faldas
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/calzado' className='cat-menu__link' activeClassName='active'>
						Calzado
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/accesorios' className='cat-menu__link' activeClassName='active'>
						Accesorios
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/camisas' className='cat-menu__link' activeClassName='active'>
						Camisas
					</NavLink>
				</li>
				<li className='cat-menu__item'>
					<NavLink to='/medias' className='cat-menu__link' activeClassName='active'>
						Medias
					</NavLink>
				</li>
			</ul>
			<button onClick={handleToggle} className='burger'>
				{BurgerIcon}
			</button>
		</nav>
	)
}

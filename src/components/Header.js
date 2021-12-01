import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderNavbar from './HeaderNavbar'
import FloatMenu from './FloatMenu'
import { FiShoppingBag } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'

export default function Header() {
	const wrapperRef = useRef(null)
	const [isActive, setActive] = useState(false)
	const handleToggle = () => {
		setActive(!isActive)
	}
	let UserButton = ''

	const onOutsideClick = (ref) => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setActive(false)
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}

	const RenderUserButton = (ref) => {
		if (!localStorage.getItem('auth_token')) {
			UserButton = (
				<Link to='/login' className='icon-button'>
					<FaRegUser className='icon-button__icon' />
				</Link>
			)
		} else {
			UserButton = (
				<div ref={ref} onClick={handleToggle} className='icon-button'>
					<FaRegUser className='icon-button__icon' />
					<FloatMenu active={isActive} />
				</div>
			)
		}
	}

	onOutsideClick(wrapperRef)
	RenderUserButton(wrapperRef)

	useEffect(() => {
		window.scrollTo(0, 0)
		onOutsideClick(wrapperRef)
		RenderUserButton(wrapperRef)
	})

	return (
		<header className='main-header'>
			<div className='container'>
				<nav className='header-nav'>
					<Link to='/' className='header-nav__logo'>
						Amapola Escarlata
					</Link>
					<div className='buttons-container'>
						<Link className='icon-button'>
							<BiSearch className='icon-button__icon' />
						</Link>
						{UserButton}
						<Link className='icon-button'>
							<FiShoppingBag className='icon-button__icon' />
						</Link>
					</div>
				</nav>
			</div>
			<HeaderNavbar />
		</header>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar__logo'>
					<Link to='/' className='navbar__item'>
						Admin Home
					</Link>
					<div className='navbar__burger burger'>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div id='navMenu' className='navbar__menu'>
					<div className='navbar-left'>
						<Link className='navbar__item' to='/admin'>
							Home
						</Link>
						<Link className='navbar__item' to='/admin'>
							Orders
						</Link>
						<Link className='navbar__item' to='/admin'>
							Payments
						</Link>
						<Link className='navbar__item' to='/admin'>
							Exceptions
						</Link>
						<Link className='navbar__item' to='/admin'>
							Reports
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

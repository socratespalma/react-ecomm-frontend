import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterNavbar() {
	return (
		<div className='footer-last-section'>
			<p className='footer-copyright'>© 2021 | Amapola Escarlata</p>
			<nav className='footer-nav'>
				<ul>
					<li className='footer-nav__li'>
						<Link to='/privacy-policy' className='footer-nav__li--nl'>
							Política de privacidad
						</Link>
					</li>
					<li className='footer-nav__li'>
						<Link to='/terms-of-use' className='footer-nav__li--nl'>
							Términos de uso
						</Link>
					</li>
					<li className='footer-nav__li'>
						<Link to='/legal-info' className='footer-nav__li--nl'>
							Información legal
						</Link>
					</li>
					<li className='footer-nav__li'>
						<Link to='/about-us' className='footer-nav__li--nl'>
							Nosotros
						</Link>
					</li>
					<li className='footer-nav__li'>
						<Link to='/help' className='footer-nav__li--nl'>
							Ayuda
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

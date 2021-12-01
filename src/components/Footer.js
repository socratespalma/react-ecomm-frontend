import React from 'react'
import FooterNavbar from './FooterNavbar'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
	return (
		<div className='main-footer'>
			<div className='footer-container'>
				<div className='contact'>
					<h2 className='contact__title'>Contáctenos</h2>
					<div className='contact__social'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.facebook.com/Amapola-Escarlata-1765011270283166'
							className='contact__anchor'
						>
							<FaFacebook />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.instagram.com/amapola_escarlata/'
							className='contact__anchor'
						>
							<FaInstagram />
						</a>
						<a
							href='https://wa.me/50512345678?text=send%20a%20premade%20message'
							className='contact__anchor'
						>
							<FaWhatsapp />
						</a>
					</div>
				</div>
				<FooterNavbar />
			</div>
		</div>
	)
}

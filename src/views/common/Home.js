import React, { useEffect } from 'react'
import { FaCreditCard, FaGlobeAmericas } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollUp from '../../components/ScrollUp'
import Carousel from '../../components/Carousel'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<main className='trick'>
			<Header />
			{/* HERO section */}
			<section className='hero-container'>
				<div className='hero'>
					<h1 className='hero__title'>
						Somos una tienda <br />
						<span className='bb-word'>diferente</span>
					</h1>
					<h4 className='hero__subtitle'>Brindamos la mejor experiencia a nuestros clientes</h4>
					<a href='#slogan-section' className='hero__cta'>
						Aprender más
					</a>
				</div>
			</section>
			{/* SLOGAN */}
			<section id='slogan-section' className='slogan-section'>
				<p className='slogan-section__text'>
					Prendas y accesorios vintage, con un <br />
					toque único y especial.
				</p>
			</section>
			{/* NOVEDADES */}
			<section className='news-section'>
				<h1 className='news-section__title'>Novedades</h1>
				<Carousel />
			</section>
			{/* LO MAS BUSCADO (Component) */}
			<section className='ms-section'>
				<h1 className='ms-section__title'>Lo más buscado</h1>
				<div className='ms-section__grid'>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/sombreroclasicoRojo.jpg').default}
							alt='Sombrero-rojo'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/camisetaBotanica.jpg').default}
							alt='Camiseta-botanica'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/calcetasMesh.jpg').default}
							alt='Calcetas-mesh'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/vestidoLucy.jpg').default}
							alt='Vestido-lucy'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/cadenaMapaNicaragua.jpg').default}
							alt='Cadena-nic'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/Calcetas.jpg').default}
							alt='Calcetas'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/Cuellos.jpg').default}
							alt='Cuellos'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/Pines.jpg').default}
							alt='Pines'
						/>
					</figure>
					<figure className='ms-section__container'>
						<img
							className='ms-section__container--img'
							src={require('../../assets/images/fondoamapolas.jpg').default}
							alt='Fondo-amapolas'
						/>
						<img
							className='ms-section__container--img product-img'
							src={require('../../assets/images/BrocheEatMe.jpg').default}
							alt='Broche-eatme'
						/>
					</figure>
				</div>
			</section>
			{/* FEATURES */}
			<section className='features-section'>
				<div className='features-container'>
					<div className='feature'>
						<FaCreditCard className='feature__icon' />
						<h4 className='feature__title'>Compra segura en línea</h4>
						<p className='feature__description'>
							Tus datos están protegidos bajo un sistema cifrado
						</p>
					</div>
					<div className='feature'>
						<FaGlobeAmericas className='feature__icon' />
						<h4 className='feature__title'>Envíos internacionales</h4>
						<p className='feature__description'>Hasta tu hogar</p>
					</div>
					<div className='feature'>
						<BiSupport className='feature__icon' />
						<h4 className='feature__title'>Soporte técnico 24/7</h4>
						<p className='feature__description'>Personalizado para cada uno de nuestros clientes</p>
					</div>
				</div>
			</section>
			<Footer />
			<ScrollUp />
		</main>
	)
}

export default Home

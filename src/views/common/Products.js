import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SidePanel from '../../components/SidePanel'
import ProductsList from '../../components/products/ProductsList'

const Products = () => {
	const products = [
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
		{
			img: './images/Mochila.jpg',
			name: 'Calcetas Arcoiris',
			price: '$12.00',
		},
	]
	return (
		<>
			<Header />
			<main className='main'>
				<SidePanel />
				<ProductsList products={products} />
			</main>
			<Footer />
		</>
	)
}

export default Products

import Product from './Product'
const ProductsList = ({ products }) => {
	return (
		<div className='products-container'>
			{products.map((product, index) => (
				<Product key={index} product={product} />
			))}
		</div>
	)
}

export default ProductsList

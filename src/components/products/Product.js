import { Link } from 'react-router-dom'
import { IoBagAddOutline } from 'react-icons/io5'

const Product = ({ product }) => {
	const onClick = (e) => {
		return
	}

	return (
		<div className='product-card'>
			<Link to='/product-detail'>
				<img src={product.img} alt={product.name} className='product__img' />
				<h4 className='product-card__name'>{product.name}</h4>
			</Link>
			<p className='product-card__price'>{product.price}</p>
			<button onClick={onClick} className='product-card__btn'>
				<IoBagAddOutline id='btn' />
				Agregar
			</button>
		</div>
	)
}

export default Product

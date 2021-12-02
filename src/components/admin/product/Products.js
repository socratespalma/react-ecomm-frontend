import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Notiflix from 'notiflix'

/*
	slug
	name
	description
	stock
	price
	status
	image
*/

const Products = () => {
	const [categoryList, setCategoryList] = useState([])
	const [productInput, setProduct] = useState({
		category_id: '',
		slug: '',
		name: '',
		description: '',
		stock: '',
		price: '',
		status: '',
	})
	const [picture, setPicture] = useState([])
	const [error, setError] = useState([])

	const handleInput = (e) => {
		e.persist()
		setProduct({
			...productInput,
			[e.target.name]: e.target.name === 'status' ? e.target.checked : e.target.value,
		})
	}
	const handleImage = (e) => {
		e.persist()
		setPicture({ image: e.target.files[0] })
	}

	useEffect(() => {
		axios.get(`/api/all-category`).then((res) => {
			if (res.data.status === 200) {
				setCategoryList(res.data.category)
			}
		})
	}, [])

	const submitProduct = (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('image', picture.image)
		formData.append('category_id', productInput.category_id)
		formData.append('slug', productInput.slug)
		formData.append('name', productInput.name)
		formData.append('description', productInput.description)
		formData.append('stock', productInput.stock)
		formData.append('price', productInput.price)
		formData.append('status', productInput.status ? '1' : '0')

		axios.post(`/api/store-product`, formData).then((res) => {
			if (res.data.status === 200) {
				Notiflix.Notify.success('Producto agregado exitosamente')
				document.getElementById('PRODUCT_FORM').reset()
				setProduct({
					...productInput,
					category_id: '',
					slug: '',
					name: '',
					description: '',
					stock: '',
					price: '',
					status: '',
				})
				setError([])
			} else if (res.data.status === 422) {
				Notiflix.Notify.failure('Los campos son requeridos')
				setError(res.data.errors)
			}
		})
	}

	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Agregar Producto</h3>
			</div>
			<form onSubmit={submitProduct} className='columns form' id='PRODUCT_FORM'>
				<div className='column'>
					<div className='field'>
						<label className='label'>Seleccionar categoría</label>
						<div className='control'>
							<select
								name='category_id'
								onChange={handleInput}
								value={productInput.category_id}
								className='input'
							>
								<option> Select category</option>
								{categoryList.map((item) => {
									return (
										<option value={item.id} key={item.id}>
											{item.name}
										</option>
									)
								})}
							</select>
						</div>
						<small className='help-danger'>{error.category_id}</small>
					</div>
					<div className='field'>
						<label className='label'>Slug</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='slug'
								onChange={handleInput}
								value={productInput.slug}
								placeholder='Text input'
							/>
						</div>
						<small className='help-danger'>{error.slug}</small>
					</div>
					<div className='field'>
						<label className='label'>Nombre</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='name'
								onChange={handleInput}
								value={productInput.name}
								placeholder='Text input'
							/>
						</div>
						<small className='help-danger'>{error.name}</small>
					</div>
					<div className='field'>
						<label className='label'>Stock</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='stock'
								onChange={handleInput}
								value={productInput.stock}
								placeholder='Text input'
							/>
						</div>
						<small className='help-danger'>{error.stock}</small>
					</div>
				</div>
				<div className='column'>
					<div className='field'>
						<label className='label'>Descripción</label>
						<div className='control'>
							<textarea
								className='textarea'
								name='description'
								onChange={handleInput}
								value={productInput.description}
								placeholder='Text input'
							/>
						</div>
					</div>
					<div className='field'>
						<label className='label'>Precio</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='price'
								onChange={handleInput}
								value={productInput.price}
								placeholder='Text input'
							/>
						</div>
						<small className='help-danger'>{error.price}</small>
					</div>
					<div className='field'>
						<label className='label'>Imagen</label>
						<div className='control'>
							<input
								className='input'
								type='file'
								name='image'
								onChange={handleImage}
								placeholder='Text input'
							/>
						</div>
					</div>
					<div className='field'>
						<label className='checkbox'>
							<input
								type='checkbox'
								onChange={handleInput}
								defaultChecked={productInput.status === 1 ? true : false}
								name='status'
							/>
							Status (checked = oculto)
						</label>
					</div>
				</div>
				<div className='column col-full'>
					<div className='control'>
						<button type='submit' className='btn-link'>
							Agregar
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Products

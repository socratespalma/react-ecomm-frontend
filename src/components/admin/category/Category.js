import axios from 'axios'
import React, { useState, useEffect } from 'react'

const categories = [
	{
		slug: 'accesorios',
		name: 'Accesorios',
		description: 'descripccion',
	},
	{
		slug: 'calzado',
		name: 'Calzado',
		description: 'descripccion',
	},
	{
		slug: 'camisas',
		name: 'Camisas',
		description: 'descripccion',
	},
	{
		slug: 'carteras',
		name: 'Carteras',
		description: 'descripccion',
	},
	{
		slug: 'faldas',
		name: 'Faldas',
		description: 'descripccion',
	},
	{
		slug: 'medias',
		name: 'Medias',
		description: 'descripccion',
	},
	{
		slug: 'mochilas',
		name: 'Mochilas',
		description: 'descripccion',
	},
	{
		slug: 'sombreros',
		name: 'Sombreros',
		description: 'descripccion',
	},
	{
		slug: 'vestidos',
		name: 'Vestidos',
		description: 'descripccion',
	},
]

const Category = () => {
	const [categoryInput, setCategory] = useState({
		slug: '',
		name: '',
		description: '',
		error_list: [],
	})

	const handleInput = (e) => {
		e.persist()
		setCategory({ ...categoryInput, [e.target.name]: e.target.value })
	}

	const submitCategory = (e) => {
		e.preventDefault()
		const data = {
			slug: categoryInput.slug,
			name: categoryInput.name,
			description: categoryInput.description,
		}

		axios.post(`/api/store-category`, data).then((res) => {
			if (res.data.status === 200) {
				document.getElementById('CATEGORY_FORM').reset()
			} else if (res.data.status === 400) {
				setCategory({ ...categoryInput, error_list: res.data.errors })
			}
		})
	}

	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Categorias</h3>
				<button className='header-bar__button'>Agregar</button>
			</div>
			<form className='columns form' id='CATEGORY_FORM'>
				<div className='column'>
					<div className='field'>
						<label className='label'>Slug</label>
						<div className='control'>
							<input
								className='input'
								onChange={handleInput}
								value={categoryInput.slug}
								type='text'
								name='slug'
								placeholder='Ingrese la categoría'
							/>
						</div>
					</div>
					<div className='field'>
						<label className='label'>Nombre</label>
						<div className='control'>
							<input
								className='input'
								onChange={handleInput}
								value={categoryInput.name}
								type='text'
								name='name'
								placeholder='Ingrese la categoría'
							/>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='field'>
						<label className='label'>Descripción</label>
						<div className='control'>
							<input
								className='input'
								onChange={handleInput}
								value={categoryInput.description}
								type='text'
								name='description'
								placeholder='Ingrese la descripción'
							/>
						</div>
					</div>
				</div>
			</form>
			<div className='table-container'>
				<table className='table'>
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Stock</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr className='is-selected'>
							<td>Camisa blanca</td>
							<td>Camisas</td>
							<td>15.99</td>
							<td>10</td>
							<td>01/01/21</td>
						</tr>
						<tr>
							<td>Camisa blanca</td>
							<td>Camisas</td>
							<td>15.99</td>
							<td>10</td>
							<td>01/01/21</td>
						</tr>
						<tr>
							<td>Camisa blanca</td>
							<td>Camisas</td>
							<td>15.99</td>
							<td>10</td>
							<td>01/01/21</td>
						</tr>
						<tr>
							<td>Camisa blanca</td>
							<td>Camisas</td>
							<td>15.99</td>
							<td>10</td>
							<td>01/01/21</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Category

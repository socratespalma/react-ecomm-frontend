import React, { useState } from 'react'
import axios from 'axios'
import Notiflix from 'notiflix'

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
				Notiflix.Notify.success('Categoría agregada exitosamente')
				document.getElementById('CATEGORY_FORM').reset()
			} else if (res.data.status === 400) {
				Notiflix.Notify.failure('Error al agregar categoría')
				setCategory({ ...categoryInput, error_list: res.data.errors })
			}
		})
	}

	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Agregar Categoría</h3>
			</div>
			<form onSubmit={submitCategory} className='columns form' id='CATEGORY_FORM'>
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
								placeholder='Ingrese el slug'
							/>
							<span>{categoryInput.error_list.slug}</span>
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
								placeholder='Ingrese el nombre'
							/>
							<span>{categoryInput.error_list.name}</span>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='field'>
						<label className='label'>Descripción</label>
						<div className='control'>
							<textarea
								className='input'
								onChange={handleInput}
								value={categoryInput.description}
								name='description'
								placeholder='Ingrese la descripción'
							/>
						</div>
					</div>
				</div>
				<div className='column col-full'>
					<button type='submit' className='btn-link'>
						Agregar
					</button>
				</div>
			</form>
		</div>
	)
}

export default Category

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Notiflix from 'notiflix'

function EditCategory(props) {
	const [loading, setLoading] = useState(true)
	const [categoryInput, setCategory] = useState([])
	const [error, setError] = useState([])
	const history = useHistory()

	useEffect(() => {
		const category_id = props.match.params.id
		axios.get(`/api/edit-category/${category_id}`).then((res) => {
			if (res.data.status === 200) {
				setCategory(res.data.category)
			} else if (res.data.status === 404) {
				Notiflix.Notify.failure('Error')
				history.push('/admin/view-category')
			}
			setLoading(false)
		})
	}, [props.match.params.id, history])

	const handleInput = (e) => {
		e.persist()
		setCategory({ ...categoryInput, [e.target.name]: e.target.value })
	}

	const updateCategory = (e) => {
		e.preventDefault()

		const category_id = props.match.params.id
		const data = categoryInput

		axios.put(`/api/update-category/${category_id}`, data).then((res) => {
			if (res.data.status === 200) {
				Notiflix.Notify.success('Categoría modificada exitosamente')
				setError([])
			} else if (res.data.status === 422) {
				Notiflix.Notify.failure('Los campos son requeridos')
				setError(res.data.errors)
			} else if (res.data.status === 404) {
				Notiflix.Notify.failure('Error')
				history.push('/admin/view-category')
			}
		})
	}

	if (loading) {
		return <h3>Loading Edit Category...</h3>
	}

	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Editar Categoría</h3>
				<Link to='/admin/view-category'>Regresar</Link>
			</div>
			<form onSubmit={updateCategory} className='columns form'>
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
							<small>{error.slug}</small>
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
							<small>{error.name}</small>
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
				<button type='submit' className='header-bar__button'>
					Actualizar
				</button>
			</form>
		</div>
	)
}

export default EditCategory

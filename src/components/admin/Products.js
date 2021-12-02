import React from 'react'

const Products = () => {
	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Inventario de Productos</h3>
				<button className='header-bar__button'>Agregar</button>
			</div>
			<form className='columns form'>
				<div className='column'>
					<div className='field'>
						<label className='label'>Name</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Text input' />
						</div>
					</div>
					<div className='field'>
						<label className='label'>Name</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Text input' />
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='field'>
						<label className='label'>Name</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Text input' />
						</div>
					</div>
					<div className='field'>
						<label className='label'>Name</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Text input' />
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

export default Products

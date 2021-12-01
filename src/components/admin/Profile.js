const Profile = () => {
	return (
		<div className='container'>
			<div className='header-bar'>
				<h3 className='header-bar__title'>Tú Perfil</h3>
			</div>
			<form className='columns form'>
				<div className='column'>
					<div className='field'>
						<label className='label'>Nombre</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Ingrese la categoría' />
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='field'>
						<label className='label'>Descripción</label>
						<div className='control'>
							<input className='input' type='text' placeholder='Ingrese la descripción' />
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Profile

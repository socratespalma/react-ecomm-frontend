import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../../components/admin/Navbar'
import SideMenu from '../../components/admin/SideMenu'
import routes from '../../navigation/routes'

const MasterLayout = () => {
	return (
		<div>
			<Navbar />
			<div className='admin-container'>
				<div className='columns'>
					<div className='column col-3'>
						<SideMenu />
					</div>
					<div className='column col-9'>
						<Switch>
							{routes.map((route, idx) => {
								return (
									route.component && (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props) => <route.component {...props} />}
										/>
									)
								)
							})}
							<Redirect from='admin' to='/admin/dashboard' />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MasterLayout

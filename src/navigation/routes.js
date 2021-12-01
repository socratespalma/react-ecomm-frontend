import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile'
import Products from '../components/admin/Products'
import Category from '../components/admin/category/Category'
import ViewCategory from '../components/admin/category/ViewCategory'

const routes = [
	{ path: '/admin', exact: true, name: 'Admin' },
	{
		path: '/admin/dashboard',
		exact: true,
		name: 'Dashboard',
		component: Dashboard,
	},
	{ path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
	{
		path: '/admin/products',
		exact: true,
		name: 'Products',
		component: Products,
	},
	{
		path: '/admin/category',
		exact: true,
		name: 'Category',
		component: Category,
	},
	{
		path: '/admin/view-category',
		exact: true,
		name: 'ViewCategory',
		component: ViewCategory,
	},
]

export default routes

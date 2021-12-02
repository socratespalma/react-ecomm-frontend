import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Products from "../components/admin/Products";
import Category from "../components/admin/category/Category";
import ViewCategory from "../components/admin/category/ViewCategory";
import EditCategory from "../components/admin/category/EditCategory";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/profile", exact: true, name: "Profile", component: Profile },
  {
    path: "/admin/products",
    exact: true,
    name: "Products",
    component: Products,
  },
  {
    path: "/admin/add-category",
    exact: true,
    name: "Category",
    component: Category,
  },
  {
    path: "/admin/view-category",
    exact: true,
    name: "ViewCategory",
    component: ViewCategory,
  },
  {
    path: "/admin/edit-category/:id",
    exact: true,
    name: "EditCategory",
    component: EditCategory,
  },
];

export default routes;

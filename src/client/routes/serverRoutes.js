import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/login/',
    component: ForgotPassword,
  },
  {
    exact: true,
    path: '/signup',
    component: SignUp,
  },
];

export default routes;

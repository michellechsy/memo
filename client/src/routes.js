import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Profile from './components/Profile.jsx';
import LatestPosts from './components/LatestPosts.jsx'

const routes = {
  // base component (wrapper for the whole application).
  // component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/profile',
      component: Profile
    },

    {
      path: '/posts',
      component: LatestPosts
    }

  ]
};

export default routes;

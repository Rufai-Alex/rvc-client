// import React from 'react';
// import { Redirect } from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

/*
  Routes config must be ordered the same way you'd 
  do inside a `<Switch>`. The last route object is 
  a "fallback" route, to catch 404 errors.
*/

/* 
  Unprotected route takes path and a component prop e.g Explore
  Protected route takes path and a render prop e.g Cookbook
*/

// const createPrivateRoute = Component =>
//   localStorage.getItem('token') ? <Component /> : <Redirect to='/explore' />;

const RoutesConfig = [
  // {
  //   path: "/",
  //   component: Explore,
  // },
  // {
  //   path: "/cookbook",
  //   render: () => createPrivateRoute(Cookbook),
  // },
  {
    path: '*',
    component: PageNotFound
  },
];

export default RoutesConfig;

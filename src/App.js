import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="/" to="/login" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={MainPage} path="/todo-list"></Route>
        <Route component={ErrorPage} path="*"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(App);

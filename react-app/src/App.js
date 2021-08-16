import React, { useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginPage/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Home from './components/HomePage/Home';
import { authenticate } from './store/session';
import RealHome from './components/HomePage/RealHome'
import SplashPage from './components/HomePage/SplashPage'


function App() {
  const sessionUser = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <Route path='/' exact={true} >
          <Home />
        </Route> */}
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route path='/real'>
          <RealHome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

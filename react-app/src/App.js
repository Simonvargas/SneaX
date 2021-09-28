import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginPage/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Home from './components/HomePage/Home'
import SneaxDetails from './components/SneaxDetails/SneaxDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';


function App() {
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
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <ProtectedRoute path='/sneax/:id' exact={true}>
          <SneaxDetails />
        </ProtectedRoute>
        <Route path='/'>
            <PageNotFound />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';  
import './App.css';
import Routes from './routes';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history}  from './helpers/history';
import  {alertActions}  from './redux/actions';
// import { PrivateRoute } from './components/privateroute';
// import  HomePage  from '../src/components/HomePage';    
// import { LoginPage } from './components/LoginPage';
// import { RegisterPage } from './components/RegisterPage';
function App() {
 
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
  return (
    <div className="App">
     <Routes />
    </div>
  );
}

export default App;

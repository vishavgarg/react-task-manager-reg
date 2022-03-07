import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';


const ProtectedRoutes = ({loggedIn}) => {
    const useAuth =()=> {
        const user={loggedIn: loggedIn};
        return user && user.loggedIn;
    }
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />
    // return isAuth ? <Navigate to="/Dashboard" /> : <Login />
}

export default ProtectedRoutes
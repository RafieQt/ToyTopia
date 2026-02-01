import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);

    if(user && user?.email){
        return children;

    }
    else{
        return <Navigate to='/signin'></Navigate>
    }

};

export default PrivateRoute;
import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const error = useRouteError();
    const handleLogout = _ => {
        logOut()
            .then(res => {
                toast.success('Logout Successful!')
                navigate('/login');
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div>
            <p className="text-red-500">Something went wrong!!!</p>
            <p className="text-red-500">{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogout}
                className='hover:bg-red-400/50 font-bold'>Sign Out</button>
                and log back in.</h4>
        </div>
    );
};

export default DisplayError;
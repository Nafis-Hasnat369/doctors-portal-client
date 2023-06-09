import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setLoading, createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
            setLoading(false);
        }
    }, [token, navigate, setLoading]);

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                handleUpdateUserProfile(data?.name, data?.photoURL);
                saveUser(data.name, data.email)
                toast.success('New User created Successfully!')
                setCreatedUserEmail(data.email)
            })
            .catch(err => toast.error(err.message));
    }

    const handleUpdateUserProfile = (name, photoURL = null) => {
        updateUserProfile({ displayName: name, photoURL: photoURL })
            .then(_ => { })
            .then();
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`https://doctors-portal-server-six-eosin.vercel.app/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }


    const handleGoogleSignIn = _ => {
        googleSignIn()
            .then(res => {
                toast.success('Login Successfully!')
                navigate('/');
                setLoading(false);
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="from-control w-full">
                        <label className="label"><span className='label-text'>Name</span></label>
                        <input type='text'
                            {...register('name', {
                                required: 'Name is required'
                            })}
                            className='input input-primary input-bordered w-full' />
                        {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
                    </div>
                    <div className="from-control w-full">
                        <label className="label"><span className='label-text'>Email</span></label>
                        <input type='email'
                            {...register('email', {
                                required: 'Email is required!'
                            })}
                            className='input input-primary input-bordered w-full' />
                        {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
                    </div>
                    <div className="from-control w-full">
                        <label className="label"><span className='label-text'>Password</span></label>
                        <input type='password'
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters or longer' },
                                // pattern: { value: /^(?=(.*[a-z]){1})(?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=(.*[!@#$%^&*()\-__+.]){1}).{6}$/, message: "Password must be strong" }
                            })}
                            className='input input-primary input-bordered w-full' />
                        {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}
                    </div>
                    <input className='btn btn-primary w-full mt-6' type="submit" value='Sign Up' />
                </form>
                <p>Already have an account? <Link to='/login' className='text-blue-600 font-bold'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-accent w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;
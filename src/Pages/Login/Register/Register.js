import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { setUser, setLoading, createUser } = useContext(AuthContext);

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setLoading(false);
            })
            .catch(err => console.log(err))
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
                <button className="btn btn-accent w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;
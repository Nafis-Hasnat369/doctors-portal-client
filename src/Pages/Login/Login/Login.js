import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, setLoading } = useContext(AuthContext);

    const handleLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                toast.success('Login Successfully!')
                setLoading(false);
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="from-control w-full">
                        <label className="label"><span className='label-text'>Email</span></label>
                        <input type='email'
                            {...register("email", { required: 'Email is required' })}
                            className='input input-primary input-bordered w-full' />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="from-control w-full">
                        <label className="label"><span className='label-text'>Password</span></label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be at least 6 characters or longer' },
                            })}
                            className='input input-primary input-bordered w-full' />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className='label-text'>Forget Password?</span></label>
                    <input className='btn btn-primary w-full' type="submit" value='Login' />
                </form>
                <p>New to Doctors Portal? <Link to='/register' className='text-blue-600 font-bold'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-accent w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
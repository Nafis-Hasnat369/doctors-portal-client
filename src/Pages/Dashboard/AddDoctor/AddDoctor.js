import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-six-eosin.vercel.app/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // save doctor information to the database
                    fetch(`https://doctors-portal-server-six-eosin.vercel.app/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('New Doctor added successfully!')
                            navigate('/dashboard/manageDoctors')
                        })
                        .catch(err => toast.error(err.message))
                }
            })
    }

    if (isLoading)
        return <Loading />

    return (
        <div className='w-96 p-3 shadow-xl rounded-xl'>
            <h2 className='text-4xl p-4'>Add a doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="from-control w-full">
                    <label className="label"><span className='label-text'>Name</span></label>
                    <input type='text' placeholder='Enter Your Name'
                        {...register('name', {
                            required: 'Name is required'
                        })}
                        className='input input-primary input-bordered w-full' />
                    {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
                </div>
                <div className="from-control w-full">
                    <label className="label"><span className='label-text'>Email</span></label>
                    <input type='email' placeholder='Enter Your Email'
                        {...register('email', {
                            required: 'Email is required!'
                        })}
                        className='input input-primary input-bordered w-full' />
                    {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
                </div>
                <div className="from-control w-full">
                    <label className="label"><span className='label-text'>Specialty</span></label>
                    <select
                        {...register('specialty', {
                            required: true
                        })}
                        className="select select-bordered w-full">
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="from-control w-full mt-5">
                    <input type="file"
                        {...register('image', {
                            required: 'image is required'
                        })}
                        className="file-input file-input-bordered file-input-accent w-full" />
                    {errors.image && <span className='text-red-600'>{errors.image?.message}</span>}
                </div>
                <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full mt-6' type="submit"
                    value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;


/*
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)

*/
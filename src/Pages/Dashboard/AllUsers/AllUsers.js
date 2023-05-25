import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';

const AllUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful!');
                    refetch();
                }
            })
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
            headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('User deleted successfully!');
                    refetch();
                }
            })
            .catch(err => toast.error(err.message))
    }

    if (isLoading)
        return <Loading />

    return (
        <div>
            <h2 className='text-3xl p-4'>All users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role !== 'admin' ?
                                        <button onClick={_ => handleMakeAdmin(user._id)} className='btn btn-sm btn-accent'>
                                            Make Admin
                                        </button> :
                                        <button className='btn btn-sm text-white'>
                                            Admin
                                        </button>
                                    }</td>
                                    <td><button onClick={_ => handleDelete(user._id)}
                                        className='btn btn-sm btn-error text-white hover:bg-red-500'>
                                        Remove User
                                    </button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
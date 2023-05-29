import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = _ => {
        setDeletingDoctor(null);
    }

    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://doctors-portal-server-six-eosin.vercel.app/doctors`, {
                    headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
                });
                const data = await res.json();
                return data;
            }
            catch { }
        }
    })

    const handleDelete = doctor => {
        fetch(`https://doctors-portal-server-six-eosin.vercel.app/deleteDoctor/${doctor._id}`, {
            method: 'DELETE',
            headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${doctor.name} deleted successfully!`);
                    refetch();
                }
            })
            .catch(err => toast.error(err.message))
    }

    if (isLoading)
        return <Loading />
    return (
        <div>
            <h2 className="text-3xl p-3">Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
                                            <img src={doctor.image} alt='doctor' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.specialty}</td>
                                <td>
                                    <label onClick={_ => setDeletingDoctor(doctor)} htmlFor="confirmation-modal"
                                        className="btn btn-sm btn-error text-white hover:bg-red-500">
                                        Delete
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete Dr. ${deletingDoctor.name}, it can't be undone!`}
                    successAction={handleDelete}
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                />
            }
        </div>
    );
};

export default ManageDoctors;
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async _ => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
            });
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments: {bookings?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading && bookings?.map((booking, i) =>
                                <tr key={i} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking?.patient}</td>
                                    <td>{booking?.treatment}</td>
                                    <td>{booking?.appointmentDate}</td>
                                    <td>{booking?.slot}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
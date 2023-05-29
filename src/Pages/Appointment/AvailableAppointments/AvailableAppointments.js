import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // const { data: appointmentOptions = [] } = useQuery({
    //     queryKey: [`appointmentOptions`],
    //     queryFn: _ => fetch(`https://doctors-portal-server-six-eosin.vercel.app/appointmentOptions`)
    //         .then(res => res.json())
    // })

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: [`appointmentOptions`, date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-six-eosin.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading)
        return <div className='text-center'><progress className="progress w-56"></progress></div>

    return (
        <section className='my-16'>
            {selectedDate ?
                <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p> :
                <p className='text-center text-secondary font-bold'>You haven't selected any date yet!</p>}
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot, email, phone, price
        }

        fetch(`https://doctors-portal-server-six-eosin.vercel.app/bookings`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Congratulation booking confirmed!');
                    setTreatment(null);
                    refetch();
                }
                else
                    toast.error(data.message);
            })
            .catch(err => toast.error(err.message))

        form.reset();
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid gap-3 mt-6' onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input w-full input-bordered font-bold" />
                        <select name='slot' className="select select-bordered border-primary w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input required name='name' defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-primary w-full input-bordered" />
                        <input required name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-primary w-full input-bordered" />
                        <input required name='phone' type="tel" placeholder="Phone Number" className="input input-primary w-full input-bordered" />
                        <br />
                        <input className="input w-full btn btn-accent" type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
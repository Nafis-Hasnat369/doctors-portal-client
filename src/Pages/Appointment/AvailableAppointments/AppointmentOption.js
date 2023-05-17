import React from 'react';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl text-center">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <ButtonPrimary>book appointment</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
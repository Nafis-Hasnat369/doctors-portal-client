import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`,borderRadius: "24px" }}>
            <div className="hero lg:mt-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='doctor' className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h4 className="text-lg font-bold text-primary">Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout. The point of using Lorem Ipsumis that it has a
                            more-or-less normal distribution of letters,as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <ButtonPrimary>Make Appointment</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
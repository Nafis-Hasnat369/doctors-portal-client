import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServiceCarts from '../Services/ServiceCarts';
import Treatment from '../Services/Treatment';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testtimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceCarts />
            <Treatment />
            <MakeAppointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;
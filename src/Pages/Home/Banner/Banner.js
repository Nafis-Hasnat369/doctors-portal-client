import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

const Banner = () => {
    const image = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className="hero h-auto">
            <div style={image} className="hero-content flex-col lg:flex-row-reverse">
                <img alt='chair' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;
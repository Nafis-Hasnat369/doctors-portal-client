import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="card lg:card-side bg-base-100 mt-36">
            <figure className='lg:ms-48'>
                <img className='rounded-lg w-[458px]' src={treatment} alt="Album" />
            </figure>
            <div className="card-body lg:w-1/2 lg:ms-12">
                <h2 className="card-title text-5xl">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='lg:w-1/2 mt-6'>It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                    distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.
                    Many desktop publishing packages and web page</p>
                <div className="card-actions mb-20">
                    <button className="btn btn-primary uppercase bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;
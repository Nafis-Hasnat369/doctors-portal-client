import React from 'react';

const ServiceCart = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className='card p-6 shadow-xl'>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCart;
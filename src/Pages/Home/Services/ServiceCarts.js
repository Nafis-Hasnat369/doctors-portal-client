import React from 'react';
import ServiceCart from './ServiceCart';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';


const ServiceCarts = () => {
    const cardData = [
        {
            id: 4, name: 'Fluoride Treatment',
            description: `These treatments have much more fluoride than what’s in your water or toothpaste. 
            They only take a few minutes to apply. You may be asked to avoid eating or 
            drinking for 30 minutes after the treatment so the fluoride can fully absorb.`,
            icon: cavity,
        },
        {
            id: 5, name: 'Cavity Filling',
            description: `Fillings treat tooth decay, preventing further damage and tooth loss,
             as well as the possibility of pain and infection. 
            A filling seals a hole, or cavity, in the tooth.`,
            icon: fluoride,
        },
        {
            id: 6, name: 'Teeth Whitening',
            description: `Teeth whitening refers to a variety of processes that aim to make 
            someone’s natural teeth appear brighter and whiter. 
            Teeth whitening methods include sanding down stains, 
            bleaching, ultraviolet (UV) light therapy, and more.`,
            icon: whitening,
        },
    ]

    return (
        <>
            <div className='text-center mt-32'>
                <h2 className="text-2xl font-bold text-cyan-400/75">OUR SERVICES</h2>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid mt-8 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cardData.map(card =>
                        <ServiceCart
                            key={card.id}
                            card={card}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ServiceCarts;
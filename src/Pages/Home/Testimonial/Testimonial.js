import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Henry',
            img: people1,
            review: `It is a long established fact that by the readable content of a lot layout. 
            The point of using Lorem a more-or-less normal distribute to using Content here, content`,
            location: 'California',
        },
        {
            _id: 2,
            name: 'Wilson Henry',
            img: people2,
            review: `It is a long established fact that by the readable content of a lot layout. 
            The point of using Lorem a more-or-less normal distribute to using Content here, content`,
            location: 'California',
        },
        {
            _id: 3,
            name: 'Wilson Henry',
            img: people3,
            review: `It is a long established fact that by the readable content of a lot layout. 
            The point of using Lorem a more-or-less normal distribute to using Content here, content`,
            location: 'California',
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </figure>
            </div>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;
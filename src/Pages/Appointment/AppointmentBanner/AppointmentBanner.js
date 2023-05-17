import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    const image = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <header className='my-6'>
            <div className="hero">
                <div style={image} className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6 shadow-2xl rounded-xl p-4'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
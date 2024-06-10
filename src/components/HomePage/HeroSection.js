import React from 'react';
import '../../styles/HeroSection.scss';
import logo from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { getSpecialties } from '../../services/apiService';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleAppointmentsClick = async () => {
        try {
            const specialties = await getSpecialties();
            navigate('/service', { state: { specialties } });
        } catch (error) {
            console.error('Failed to fetch specialties:', error);
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className='heading'>Providing Quality Healthcare For A Brighter And Healthy Future</h1>
                <p>At Our Hospital, We Are Dedicated To Providing Exceptional Medical Care To Our Patients And Their Families. Our Experienced Team Of Medical Professionals, Cutting-Edge Technology, And Compassionate Approach Make Us A Leader In The Healthcare Industry</p>
                <div className="buttons">
                    <button className="appointments" onClick={handleAppointmentsClick}>Appointments</button>
                    <button className="watch-video">Watch Video</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={logo} alt="Doctor" />
            </div>
        </section>
    );
};

export default HeroSection;

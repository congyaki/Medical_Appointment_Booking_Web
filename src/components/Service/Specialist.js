import React, { useState } from 'react';
import '../../styles/Specialist.scss';
import DoctorCards from '../../components/Service/DoctorCard.js';
import Datetime from '../../components/Service/Datetime.js';
import Profile from '../../components/Service/Profile.js';
import Confirm from '../../components/Service/Confirm.js';
import FindDoctor from '../../components/HomePage/FindDoctor.js';
import { getDoctorsBySpecialty } from '../../services/apiService';

const SpecialtySelection = ({ specialties, onBookingClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [doctors, setDoctors] = useState([]);

    const handleSpecialtySelect = async (specialty) => {
        setSelectedSpecialty(specialty);
        try {
            const data = await getDoctorsBySpecialty(specialty.id); // Sử dụng hàm mới để lấy danh sách bác sĩ
            setDoctors(data);
        } catch (error) {
            console.error('Failed to fetch doctors:', error);
        }
    };

    return (
        <>
            <div className="specialty-selection">
                <h2>Please select a specialty</h2>
                <input
                    type="text"
                    placeholder="Find a specialty"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="specialty-list">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="specialty-item" onClick={() => handleSpecialtySelect(specialty)}>
                            <h3>{specialty.name}</h3>
                            <p>{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {selectedSpecialty && (
                    <div className="doctor-cards-container">
                        <DoctorCards doctors={doctors} onBookingClick={onBookingClick} />
                    </div>
                )}
            </div>
        </>
    );
};


function Specialist({ specialties }) {
    const [currentView, setCurrentView] = useState('specialty');
    const [previousView, setPreviousView] = useState(null);
    const [history, setHistory] = useState([]);

    const handleBookingClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('datetime');
    };

    const handleNextClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('profile');
    };

    const handleProfileNextClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('confirm');
    };

    const handleBackClick = () => {
        if (history.length > 0) {
            const prevView = history.pop();
            setCurrentView(prevView);
        }
    };

    return (
        <div className="specialist">
            {currentView === 'specialty' && <FindDoctor />}
            {currentView === 'specialty' && (
                <SpecialtySelection specialties={specialties} onBookingClick={handleBookingClick} />
            )}
            {currentView === 'datetime' && (
                <Datetime onNextClick={handleNextClick} onBackClick={handleBackClick} />
            )}
            {currentView === 'profile' && (
                <Profile onNextProfileClick={handleProfileNextClick} onBackClick={handleBackClick} />
            )}
            {currentView === 'confirm' && (
                <Confirm onBackClick={handleBackClick} />
            )}
        </div>
    );
}

export default Specialist;

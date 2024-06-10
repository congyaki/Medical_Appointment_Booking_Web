import React, { useState } from 'react';
import '../../styles/Specialist.scss';
import DoctorCards from '../../components/Service/DoctorCard.js';
import Calendar from '../../components/Service/Datetime.js';
import Profile from '../../components/Service/Profile.js';
import { getDoctorsBySpecialty } from '../../services/apiService';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../components/Service/Confirm.js';

const SpecialtySelection = ({ specialties, onSpecialtySelect, hideSpecialist }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSpecialtySelect = async (specialty) => {
        try {
            const data = await getDoctorsBySpecialty(specialty.id);
            onSpecialtySelect(data); // Cập nhật danh sách bác sĩ
            hideSpecialist(); // Ẩn chuyên khoa sau khi chọn
        } catch (error) {
            console.error('Failed to fetch doctors:', error);
        }
    };

    return (
        <div className="specialty-selection">
            <h2>Please select a specialty</h2>
            <input
                type="text"
                placeholder="Find a specialty"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="specialty-list">
                {specialties
                    .filter(specialty => specialty.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((specialty, index) => (
                        <div key={index} className="specialty-item" onClick={() => handleSpecialtySelect(specialty)}>
                            <h3>{specialty.name}</h3>
                            <p>{specialty.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

function Specialist({ specialties }) {
    const [showSpecialist, setShowSpecialist] = useState(true);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [step, setStep] = useState(1); // 1: Chọn chuyên khoa, 2: Chọn bác sĩ, 3: Chọn lịch, 4: Chọn profile, 5: confirm Appointment
    const [selectedDate, setSelectedDate] = useState(null); // Thêm state để lưu ngày hẹn
    const [selectedProfile, setSelectedProfile] = useState(null); // Thêm state để lưu thông tin profile
    const navigate = useNavigate();

    const handleHideSpecialist = () => {
        setShowSpecialist(false);
    };

    const handleSpecialtySelect = (doctors) => {
        setDoctors(doctors); // Cập nhật danh sách bác sĩ
        setStep(2); // Chuyển sang bước chọn bác sĩ
    };

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor); // Cập nhật bác sĩ được chọn
        setStep(3); // Chuyển sang bước chọn lịch
    };

    const handleBackClick = () => {
        if (step === 2) {
            setStep(1);
            setShowSpecialist(true);
        } else if (step === 3) {
            setStep(2);
            setSelectedDoctor(null);
        } else if (step === 4) {
            setStep(3);
        } else if (step === 5) {
            setStep(4);
        }
    };

    const handleNextClick = () => {
        const token = Cookies.get('authToken');
        if (!token) {
            navigate('/login'); // Chuyển hướng đến trang đăng nhập nếu chưa có JWT token
        } else {
            if (step === 3) {
                setStep(4); // Chuyển sang bước chọn profile
            } else if (step === 4) {
                setStep(5); // Chuyển sang bước confirm
            }
        }
    };

    return (
        <div className="specialist-container">
            {step === 1 && (
                <SpecialtySelection
                    specialties={specialties}
                    onSpecialtySelect={handleSpecialtySelect}
                    hideSpecialist={handleHideSpecialist}
                />
            )}
            {step === 2 && (
                <div className="doctor-selection">
                    <button className="back-button" onClick={handleBackClick}>Back</button>
                    <DoctorCards doctors={doctors} onDoctorSelect={handleDoctorSelect}/>
                </div>
            )}
            {step === 3 && (
                <div className="calendar-selection">
                    <button className="back-button" onClick={handleBackClick}>Back</button>
                    <Calendar
                        onNextClick={handleNextClick}
                        onBackClick={handleBackClick}
                        onSelectDate={(date) => setSelectedDate(date)} // Cập nhật state khi người dùng chọn ngày
                    />
                </div>
            )}
            {step === 4 && (
                <Profile
                    onNextProfileClick={handleNextClick}
                    onBackClick={handleBackClick}
                    onSelectProfile={(profile) => setSelectedProfile(profile)} // Cập nhật state khi người dùng chọn profile
                />
            )}
            {step === 5 && (
                <Confirm
                    selectedDoctor={selectedDoctor} // Truyền thông tin bác sĩ đã chọn vào Confirm
                    selectedDate={selectedDate} // Truyền ngày hẹn vào Confirm
                    selectedProfile={selectedProfile} // Truyền thông tin profile bệnh nhân vào Confirm
                    onBackClick={handleBackClick}
                />
            )}
        </div>
    );
}

export default Specialist;


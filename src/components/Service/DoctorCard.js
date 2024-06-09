import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/DoctorCard.scss';
import logo from '../../assets/images/Logo.png';

import { useNavigate } from 'react-router-dom';

function DoctorCard({ doctor, onDoctorSelect }) {
    const [rating, setRating] = useState(5); // Thiết lập mặc định là 5 sao

    const handleDoctorSelect = () => {
        // Gọi hàm onDoctorSelect với thông tin về bác sĩ
        onDoctorSelect(doctor);
        console.log("Selected Doctor:", doctor);
    };

    return (
        <div className="doctor-card" onClick={handleDoctorSelect}>
            <div className="doctor-card__info">
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    className='star'
                                    size={20}
                                    color={ratingValue <= rating ? "#F3CD03" : "#e4e5e9"}
                                />
                            </label>
                        );
                    })}
                </div>
                <p className='doctor-name'>{doctor.fullName}</p>
                <p>Experience: {doctor.experience}</p>
                <div className="doctor-card__action">
                    <img src={logo} alt="Doctor" className="doctor-card__image" />
                    <button className="btn">Select</button>
                </div>
            </div>
        </div>
    );
}

function DoctorCards({ doctors, onDoctorSelect }) {
    return (
        <div className="doctor-cards">
            {doctors.map(doctor => (
                <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onDoctorSelect={onDoctorSelect}
                />
            ))}
        </div>
    );
}

export default DoctorCards;

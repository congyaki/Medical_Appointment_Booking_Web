import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/DoctorCard.scss';
import logo from '../../assets/images/Logo.png';

function DoctorCard({ doctor, onBookingClick }) {
    const [rating, setRating] = useState(5); // Thiết lập mặc định là 5 sao

    return (
        <div className="doctor-card">
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
                    <button className="btn" onClick={(e) => {
                        e.stopPropagation();
                        onBookingClick(doctor);
                    }}>Booking</button>
                </div>
            </div>
        </div>
    );
}

function DoctorCards({ doctors, onBookingClick }) {
    return (
        <div className="doctor-cards">
            {doctors.map(doctor => (
                <DoctorCard
                    key={doctor.id} // Sử dụng trường id làm giá trị key
                    doctor={doctor}
                    onBookingClick={onBookingClick}
                />
            ))}
        </div>
    );
}

export default DoctorCards;

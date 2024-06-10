// Confirm.js
import React, { useState } from 'react';
import '../../styles/Confirm.scss';
import confirm from '../../assets/images/confirm.png';
import { createAppointment } from '../../services/apiService';

const Confirm = ({ onBackClick, selectedDoctor, selectedDate, selectedTime, selectedProfile }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        return `${hours}:${minutes}:00`;
    };

    const handleConfirm = async () => {
        const formattedTime = formatTime(selectedTime);
        const appointmentData = {
            doctorId: selectedDoctor.id,
            patientRecordId: selectedProfile.id, // Assuming selectedProfile has an id field
            date: selectedDate,
            time: formattedTime
        };

        try {
            console.log('Sending appointment data:', appointmentData);
            const response = await createAppointment(appointmentData);
            console.log('Appointment created successfully:', response);
            setIsConfirmed(true);
        } catch (error) {
            console.error('Failed to create appointment:', error);
        }
    };

    const handleClose = () => {
        setIsConfirmed(false);
    };

    return (
        <div className="appointment-details">
            <div className="confirm-examination">
                <div className="headerconfirm">Confirm examination information</div>
                <table>
                    <thead>
                        <tr>
                            <th>Medical specialty</th>
                            <th>Doctor</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedDoctor.specializationName}</td>
                            <td>{selectedDoctor.fullName}</td>
                            <td>{selectedDate}</td>
                            <td>{selectedTime}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="patient-information">
                <div className="headerconfirm">Patient information</div>
                <div className="info">
                    <p><strong>Name:</strong> {selectedProfile.name}</p>
                    <p><strong>Date of Birth:</strong> {selectedProfile.dob}</p>
                    <p><strong>Phone Number:</strong> {selectedProfile.phone}</p>
                    <p><strong>Address:</strong> {selectedProfile.address}</p>
                </div>
            </div>

            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
            <button className="back-confirm" onClick={onBackClick}>Back</button>

            {isConfirmed && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-header">
                            <span className="popup-close" onClick={handleClose}>&times;</span>
                        </div>
                        <div className="popup-body">
                            <div className="popup-icon">
                                <img src={confirm} alt="Confirmation" />
                            </div>
                            <div className="popup-message">
                                <h2 className="title">Your Appointment Has Been Confirmed</h2>
                                <p className="content">Your appointment with {selectedDoctor.fullName} on {selectedDate} at {selectedTime} has been confirmed.</p>
                                <button className="view-appointment-button">View Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Confirm;

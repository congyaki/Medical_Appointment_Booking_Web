import React, { useState } from 'react';
import '../../styles/Confirm.scss';
import confirm from '../../assets/images/confirm.png';

const Confirm = ({ onBackClick, selectedDoctor, selectedDate, selectedProfile }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed(true);
    };

    const handleClose = () => {
        setIsConfirmed(false);
    };

    return (
        <div className="appointment-details">
            <div className="confirm-examination">
                <div className="header">Confirm examination information</div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medical specialty</th>
                            <th>Service</th>
                            <th>Appointment time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{selectedDoctor.specializationName}</td>
                            <td>{selectedDoctor.name}</td>
                            <td>{selectedDate}</td>
                            <td>{selectedDoctor.fee}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="patient-information">
                <div className="header">Patient information</div>
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
                                <p className="content">Your appointment with {selectedDoctor.name} on {selectedDate.toLocaleString()} has been confirmed.</p>
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

import React, { useState } from 'react';
import '../../styles/Confirm.scss';
import confirm from '../../assets/images/confirm.png';

const Confirm = ({ onBackClick }) => {
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
                            <th>Medical examination fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Orthopedic Surgery</td>
                            <td>Healthcare hospital specialist</td>
                            <td>15:00 - 16:00 16/04/2024</td>
                            <td>3,030,000đ (S$168.48)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="patient-information">
                <div className="header">Patient information</div>
                <div className="info">
                    <p><strong>Full name:</strong> Trần Văn Tâm</p>
                    <p><strong>Date of birth:</strong> 02/04/2003</p>
                    <p><strong>Gender:</strong> Man</p>
                    <p><strong>CMND:</strong> Not update</p>
                    <p><strong>Email:</strong> Not update</p>
                    <p><strong>Ethnicity:</strong> Kinh</p>
                    <p><strong>Health insurance ID:</strong> Not update</p>
                    <p><strong>Address:</strong> 206, Thanh Bình, Mỗ Lao, Hà Đông</p>
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
                                <h2 class="title">Your Appointment Has Been Confirmed</h2>
                                <p class="content">Your appointment with Dr. Jennie Thorn on Wednesday, August 17, 2023 at 11:00 AM</p>
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

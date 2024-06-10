import React, { useState, useEffect } from 'react';
import { getPatientRecordOfCustomer } from '../../services/apiService';
import '../../styles/Profile.scss';

const PatientProfile = ({ patient, onDelete, onNextProfileClick, onSelectProfile }) => {
    const handleNextClick = () => {
        onNextProfileClick(); // Gọi hàm onNextProfileClick để chuyển đến Confirm component
    };

    const handleProfileSelect = (patient) => {
        onSelectProfile(patient); // Truyền thông tin hồ sơ bệnh nhân khi người dùng chọn hồ sơ
        onNextProfileClick(); // Chuyển đến bước tiếp theo
    };
    

    return (
        <div className="patient-profile">
            <h2>{patient.name}</h2>
            <p><strong>Date of birth:</strong> {patient.dob}</p>
            <p><strong>Phone number:</strong> {patient.phone}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <div className="buttons">
                <button className="delete" onClick={() => onDelete(patient.id)}>Delete</button>
                <button className="edit">Edit</button>
                <button className="next" onClick={handleNextClick}>Next</button>
                <button className="select-profile" onClick={handleProfileSelect}>Select Profile</button>
            </div>
        </div>
    );
};

const Profile = ({ onNextProfileClick, onBackClick, onSelectProfile }) => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatientRecords = async () => {
            try {
                const data = await getPatientRecordOfCustomer();
                console.log('Patient records data:', data);
                const formattedData = data.map(record => ({
                    id: record.id,
                    name: `${record.firstName} ${record.lastName}`,
                    dob: new Date(record.dateOfBirth).toLocaleDateString('en-GB'),
                    phone: record.phoneNumber,
                    address: record.address,
                }));
                setPatients(formattedData);
            } catch (error) {
                console.error('Failed to fetch patient records:', error);
            }
        };

        fetchPatientRecords();
    }, []);

    const handleDelete = (id) => {
        setPatients(patients.filter(patient => patient.id !== id));
    };

    return (
        <div>
            <div className="profile">
                <h1>Select Patient Profile</h1>
                {patients.map(patient => (
                    <PatientProfile
                        key={patient.id}
                        patient={patient}
                        onDelete={handleDelete}
                        onNextProfileClick={onNextProfileClick}
                        onSelectProfile={onSelectProfile} // Truyền hàm onSelectProfile xuống PatientProfile
                    />
                ))}
            </div>
            <button className="back-profile" onClick={onBackClick}>Back</button>
        </div>
    );
};

export default Profile;

import Cookies from 'js-cookie';

const API_BASE_URL = "https://localhost:7259/api"; // Thay thế bằng URL API của bạn

const getAuthToken = () => {
    return Cookies.get('authToken');
};

const setAuthToken = (token) => {
    Cookies.set('authToken', token, { expires: 7 }); // Token sẽ tồn tại trong 7 ngày
};

const removeAuthToken = () => {
    Cookies.remove('authToken');
};

const fetchWithAuth = async (url, options = {}) => {
    const token = getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const login = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/User/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setAuthToken(data.token);
    return data;
};

const getSpecialties = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/Specializations`);
        const contentType = response.headers.get("content-type");

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error('Network response was not ok');
        }

        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.log('Received data:', data); // Log dữ liệu nhận được
            if (!Array.isArray(data) || data.some(specialty => !specialty.id || !specialty.name || !specialty.description)) {
                throw new Error('Invalid data format');
            }
            return data;
        } else {
            const errorText = await response.text();
            console.error('Unexpected response format:', errorText);
            throw new Error('Received non-JSON response');
        }
    } catch (error) {
        console.error('Failed to fetch specialties:', error);
        throw error;
    }
};

const getDoctorsBySpecialty = async (specialtyId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Doctors/GetDoctorsBySpecizalizationId/${specialtyId}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received data:', data); // Log dữ liệu nhận được
        return data;
    } catch (error) {
        console.error('Failed to fetch doctors by specialty:', error);
        throw error;
    }
};

const getPatientRecordOfCustomer = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/PatientRecords`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch patient records:', error);
        throw error;
    }
};


const createAppointment = (appointment) => fetchWithAuth(`${API_BASE_URL}/Appointment`, {
    method: 'POST',
    body: JSON.stringify(appointment)
});

export {
    getAuthToken,
    setAuthToken,
    removeAuthToken,
    login,
    getSpecialties,
    getDoctorsBySpecialty,
    getPatientRecordOfCustomer,
    createAppointment
};

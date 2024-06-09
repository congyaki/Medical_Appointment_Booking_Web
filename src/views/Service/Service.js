import React from 'react';
import './Service.scss';
import Header from '../../components/HomePage/Header.js';
import SectionService from '../../components/Service/SectionService.js';
import Footer from '../../components/HomePage/Footer.js';
import Specialist from '../../components/Service/Specialist.js';
import { useLocation } from 'react-router-dom';

function Service() {
    const location = useLocation();
    const specialties = location.state ? location.state.specialties : [];

    return (
        <div className="Service">
            <Header />
            {/* <SectionService /> */}
            <Specialist specialties={specialties} />
            <Footer />
        </div>
    );
}

export default Service;

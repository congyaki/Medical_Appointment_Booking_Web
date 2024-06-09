import React from 'react';
import '../../styles/Services.scss';
import cast from '../../assets/images/cast.png';
import tooth from '../../assets/images/tooth.png';
import diagnosis from '../../assets/images/Diagnosis.png';

function Services() {
    return (
        <section className="services">
            <h2>Services we provide</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
            <div className="services-cards">
                <div className="card">
                    <img src={cast} alt="Dental treatments" />
                    <h3>Dental treatments</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <img src={tooth} alt="Bones treatments" />
                    <h3>Bones treatments</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="card">
                    <img src={diagnosis} alt="Diagnosis" />
                    <h3>Diagnosis</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </section>
    );
}

export default Services;

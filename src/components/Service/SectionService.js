import React from 'react';
import '../../styles/SectionService.scss';

function HeroSection() {
    return (
        <section className="section">
            <div className="section__content">
                <h1>Meet the Best Hospital</h1>
                <p>We know how large objects will act, but things on a small scale.</p>
                <div className="hero-section__buttons">
                    <button className="btn">Get Quote Now</button>
                    <button className="btn btn--secondary">Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

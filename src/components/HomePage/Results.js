import React from 'react';
import '../../styles/Results.scss';

const Results = () => {
    return (
        <section className="results">
            <h2 className='heading'>Our results in numbers</h2>
            <div className="stats">
                <div className="stat">
                    <span>99%</span>
                    <p>Customer satisfaction</p>
                </div>
                <div className="stat">
                    <span>15k</span>
                    <p>Online Patients</p>
                </div>
                <div className="stat">
                    <span>12k</span>
                    <p>Patients Recovered</p>
                </div>
                <div className="stat">
                    <span>240%</span>
                    <p>Company growth</p>
                </div>
            </div>
        </section>
    );
};

export default Results;

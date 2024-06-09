import React from 'react';
import '../../styles/Choose.scss';
import choose from '../../assets/images/choose.png'

const Choose = () => {
    return (
        <header className="choose">
            <div className="choose-content">
                <h1>You have lots of reasons to choose us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                <div className="choose-buttons">
                    <button className="get-started">Get started</button>
                    <button className="talk-to-sales">Talk to sales</button>
                </div>
            </div>
            <div className="choose-image">
                <img src={choose} alt="Surgery" />
            </div>
        </header>
    );
};

export default Choose;

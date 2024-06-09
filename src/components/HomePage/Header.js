import React from 'react';
import '../../styles/Header.scss';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/register');
    };

    const handleLogInClick = () => {
        navigate('/login');
    };
    return (
        <header className="header">
            <div className="logo">Healthcare</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
                <a href="#">Blogs</a>
            </nav>
            <div className="auth-buttons">
                <button className="sign-up" onClick={handleSignUpClick}>Sign Up</button>
                <button className="log-in" onClick={handleLogInClick}>Log In</button>
            </div>
        </header>
    );
};

export default Header;

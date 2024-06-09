import React, { useState, useEffect } from 'react';
import '../../styles/Header.scss';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../../services/apiService'; // Import hàm removeAuthToken từ apiService

const Header = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('userName');
        if (user) {
            setUserName(user);
        }

        // Thêm sự kiện listener cho việc đóng trang (unmount)
        window.addEventListener('beforeunload', handleUnload);

        // Xóa listener khi component unmount
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    // Xử lý khi trình duyệt được tắt hoặc chuyển trang
    const handleUnload = () => {
        localStorage.removeItem('userName');
    };

    const handleSignUpClick = () => {
        navigate('/register');
    };

    const handleLogInClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('userName');
        removeAuthToken(); // Xóa token từ cookie khi người dùng logout
        setUserName('');
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
                {userName ? (
                    <>
                        <div className="user-name">{userName}</div>
                        <button className="log-out" onClick={handleLogoutClick}>Log Out</button>
                    </>
                ) : (
                    <>
                        <button className="sign-up" onClick={handleSignUpClick}>Sign Up</button>
                        <button className="log-in" onClick={handleLogInClick}>Log In</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import './Account.scss';
import { useNavigate } from 'react-router-dom';

const Login = (history) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // TODO: Xử lý đăng nhập với email và mật khẩu
        console.log({
            email,
            password
        });
    };

    const handleGoogleLogin = () => {
        // TODO: Xử lý đăng nhập Google
    };

    const handleFacebookLogin = () => {
        // TODO: Xử lý đăng nhập Facebook
    };

    const handleRegister = () => {
        navigate('/register');
    };

    const handleForgotPassword = () => {
        // TODO: Xử lý quên mật khẩu
    };

    return (

        <div className="containerlogin">
            <h1 className="title">Healthcare</h1>
            <p className="subtitle">Please log in to continue</p>
            <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="button"
                onClick={handleLogin}
            >
                Login
            </button>
            <div className="additional-options">
                <button className="register-button" onClick={handleRegister}>
                    Sign Up
                </button>
                <button className="forgot-password" onClick={handleForgotPassword}>
                    Forgot password
                </button>
            </div>
            <hr className="divider" />
            <p className="subtitle">Or log in with your account</p>
            <button
                className="login-buttons"
                onClick={handleGoogleLogin}
            >
                Sign in with Google
            </button>
            <button
                className="facebook-button"
                onClick={handleFacebookLogin}
            >
                Login with Facebook
            </button>
        </div>
    );
};

export default Login;

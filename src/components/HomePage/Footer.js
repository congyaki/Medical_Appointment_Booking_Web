import React from 'react';
import '../../styles/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Healthcare</h2>
                    <p>Copyright © 2022 BRIX Templates | All Rights Reserved</p>
                </div>
                <div className="footer-columns">
                    <div className="column">
                        <h3>Product</h3>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Case studies</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Updates</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Culture</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Getting started</a></li>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Server status</a></li>
                            <li><a href="#">Report a bug</a></li>
                            <li><a href="#">Chat support</a></li>
                        </ul>
                    </div>
                    <div className="column follow-us">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
                            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                            <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                            <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

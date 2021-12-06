import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark py-3 d-flex justify-content-around align-items-center text-light">
                <h6>© Copyright by TvSeries Heaven 2021</h6>
                <div className="">
                    <i className="fab fa-facebook me-4 icon"></i>
                    <i className="fab fa-instagram me-4"></i>
                    <i className="fab fa-tiktok me-4"></i>
                    <i className="fab fa-twitter me-4"></i>
                    <i className="fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;
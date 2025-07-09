// import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS
// import { Button } from '../navbar/Button'; //
// import testImage from '../../assets/images/testFolder/testNews.jpg'; // Import the test image

function HomeNews() {
    return (
        <div className="home-news-container">
            <div className="home-news-section">
                <h2>Latest News</h2>
                <div className="home-news-text">
                    this is a test for the home news section
                </div>
                <div className="home-news-text">
                    this is a test for the home news section
                </div>
                <div className="home-news-text">
                    this is a test for the home news section
                </div>
            </div>
            <div className="facebook-livefeed-container">
                <h2>Facebook Feed</h2>
                <div className="home-news-text">
                    this is a test for the facebook section
                </div>
                <div className="home-news-text">
                    this is a test for the facebook section
                </div>
                <div className="home-news-text">
                    this is a test for the facebook section
                </div>

            </div>
        </div>
    );
}

export default HomeNews;
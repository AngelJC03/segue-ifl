// import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS
// import { Button } from '../navbar/Button'; //
import testImage from '../../assets/images/testFolder/testNews.jpg'; // Import the test image

function HomeNews() {
    return (
        <div className="home-news-container">
            <div className="home-news-section">
                {/* <h2>Latest News</h2>
                <p>This is where the latest news will go.</p> */}
                <img src={testImage} alt="newsArticles Test" className="home-news-image" />
            </div>
            <div className="facebook-livefeed-container">
                <h2>Facebook Live Feed</h2>
                <p>This is where the Facebook live feed will go.</p>
            </div>
        </div>
    );
}

export default HomeNews;
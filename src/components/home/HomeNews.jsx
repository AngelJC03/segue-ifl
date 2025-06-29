// import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS
// import { Button } from '../navbar/Button'; //

function HomeNews() {
    return (
        <div className="home-news-container">
            <div className="home-news-section">
                <h2>Latest News</h2>
                <p>This is where the latest news will go.</p>
            </div>
            <div className="facebook-livefeed-container">
                <h2>Facebook Live Feed</h2>
                <p>This is where the Facebook live feed will go.</p>
            </div>
        </div>
    );
}

export default HomeNews;
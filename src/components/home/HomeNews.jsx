import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS

function HomeNews() {
    const API = 'https://funny-kheer-222f19.netlify.app/.netlify/functions/getSheet';

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data) || data.length < 2) {
            setNews([]);
            return;
            }

            const headers = data[0];
            const rows = data.slice(1, 5);  // first 4 entries after header

            const processed = rows.map(row => {
            const obj = {};
            headers.forEach((key, i) => {
                obj[key] = row[i] ?? "";
            });
            return obj;
            });

            setNews(processed);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className="home-news-container">
            <div className="home-news-section">
                <h2>Latest News</h2>
                {news.map((item, index) => (
                    <div key={index} className="home-news-text">
                        <h3>{item.Title}</h3>
                        <p>{item.Description}</p>
                        <p><strong>Date:</strong> {item.Date}</p>
                    </div>
                ))}
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
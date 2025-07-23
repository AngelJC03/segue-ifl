import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS


function HomeNews() {
    const API = 'https://funny-kheer-222f19.netlify.app/.netlify/functions/getSheet';

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(news);

    return (
        <div className="home-news-container">
            <div className="home-news-section">
                <h2>Latest News</h2>
                {news.map((item, index) => (
                    <div key={index} className="home-news-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
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
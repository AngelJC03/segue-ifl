import React, { useEffect, useState } from 'react';
import './HomeNews.css'; // Import the testimonials CSS

function HomeNews() {
    const API = '/.netlify/functions/getSheet';

    function truncateText(text, maxLength) {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";
    }

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
                const rows = data.slice(1, 4);  // first 4 entries after header

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

    //test facebook function
    useEffect(() => {
        fetch('/.netlify/functions/getFacebookposts')
            .then(response => response.json())
            .then(data => {
                console.log('Facebook posts:', data);
            })
            .catch(error => {
                console.error('Error fetching Facebook posts:', error);
            });
    }, []);

    return (
        <div className="home-news-container">
            <div className="home-news-section">
                <h2>Latest News</h2>
                {news.map((item, index) => (
                    <div key={index} className="home-news-entry">
                    {item["Photo URL"] && (
                        <a href={item["Article Link"] || "#"} target="_blank" rel="noopener noreferrer">
                            <img
                                src={item["Photo URL"]}
                                alt={item.Title}
                                className="news-image"
                            />
                        </a>
                    )}
                    <div className="news-text">
                        <p>{item.Date}</p>
                        <h3>
                            <a href={item["Article Link"] || "#"} target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none', fontWeight: 'bold'}}>
                                {item.Title}
                            </a>
                        </h3>
                        <p>
                            {truncateText(item.Description, 200)}{' '}
                            <a href={item["Article Link"] || "#"} target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none'}}>
                                Read more
                            </a>
                        </p>
                    </div>
                </div>
                ))}
            </div>
            <div className="facebook-livefeed-container">
                <h2>Facebook Feed</h2>
                
            </div>
        </div>
    );
}

export default HomeNews;

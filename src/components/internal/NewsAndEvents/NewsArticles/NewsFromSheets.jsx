// components/NewsFromSheets.jsx
import React, { useEffect, useState } from 'react';
import './NewsFromSheets.css';

function NewsFromSheets() {
    const API = '/.netlify/functions/getSheet';
    const [news, setNews] = useState([]);

    function truncateText(text, maxLength) {
        if (!text) return '';
        return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
    }

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data) || data.length < 2) {
                    setNews([]);
                    return;
                }

                const headers = data[0];
                const rows = data.slice(1);

                const processed = rows.map(row => {
                    const obj = {};
                    headers.forEach((key, i) => {
                        obj[key] = row[i] ?? '';
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
        <div className="news-articles-section">
            {news.length === 0 && (
                <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    Loading News...
                </h3>
            )}
            {news.map((item, index) => (
                <div key={index} className="news-articles-entry">
                    {item['Photo URL'] && (
                        <a href={item['Article Link'] || '#'} target="_blank" rel="noopener noreferrer">
                            <img src={item['Photo URL']} alt={item.Title} className="news-image" />
                        </a>
                    )}
                    <div className="news-articles-text">
                        <p>{item.Date}</p>
                        <h3>
                            <a
                                href={item['Article Link'] || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
                            >
                                {item.Title}
                            </a>
                        </h3>
                        <p>
                            {truncateText(item.Description, 200)}{' '}
                            <a
                                href={item['Article Link'] || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Read more
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsFromSheets;

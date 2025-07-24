// components/HomeNews.jsx
import React from 'react';
import GoogleSheetsFeed from './GoogleSheetsFeed';
import FacebookFeed from './FacebookFeed';
import './HomeNews.css';

function HomeNews() {
    return (
        <div className="home-news-container">
            <GoogleSheetsFeed />
            <FacebookFeed />
        </div>
    );
}

export default HomeNews;

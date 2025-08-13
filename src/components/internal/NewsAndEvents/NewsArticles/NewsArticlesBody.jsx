// import { React } from 'react';
import './NewsArticles.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import NewsFromSheets from './NewsFromSheets';

function NewsArticlesBody() {
    return (
        <div className="news-articles-container">
            <div className="news-articles-page-title">
                <h1> News Articles </h1>
            </div>
            <FadeIn>
                <NewsFromSheets />
                <CenteredLogo />
                
            </FadeIn>
        </div>
    );
}



export default NewsArticlesBody;
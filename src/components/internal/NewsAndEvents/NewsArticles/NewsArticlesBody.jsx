// import { React } from 'react';
import './NewsArticles.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import NewsFromSheets from './NewsFromSheets';
import { useTranslation } from '../../../../hooks/useTranslation';

function NewsArticlesBody() {
    const { t } = useTranslation('news');

    return (
        <div className="news-articles-container">
            <div className="news-articles-page-title">
                <h1>{t('newsArticles.title')}</h1>
            </div>
            <FadeIn>
                <NewsFromSheets />
                <CenteredLogo />
                
            </FadeIn>
        </div>
    );
}



export default NewsArticlesBody;

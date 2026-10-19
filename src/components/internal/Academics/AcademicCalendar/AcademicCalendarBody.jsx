// import { React } from 'react';
import './AcademicCalendarBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import academicCalendarImagePage1 from '../../../../assets/images/academic-calendar-photos/2026-2027calendar.jpg';
import academicCalendarImagePage2 from '../../../../assets/images/academic-calendar-photos/2026-2027calendarP2.jpg';
import calendarPDF from '../../../../assets/images/academic-calendar-photos/2026-2027calendarpdf.pdf';
import { useTranslation } from '../../../../hooks/useTranslation';

function AcademicCalendarBody() {
    const { t } = useTranslation('academics');

    return (
            <div className="academic-calendar-container">
                <div className="academic-calendar-page-title">
                    <h1>{t('academicCalendar.title')}</h1>
                </div>
                <FadeIn>
                    <div className="academic-calendar-content">
                        <p>{t('academicCalendar.description')}</p>
                        <div className="academic-calendar-image-container"> 
                            <img src={academicCalendarImagePage1} alt={`${t('academicCalendar.imageAlt')} (page 1)`} className="academic-calendar-image"/>
                            <img src={academicCalendarImagePage2} alt={`${t('academicCalendar.imageAlt')} (page 2)`} className="academic-calendar-image"/>
                        </div>
                         <p>
                            <a href={calendarPDF} target="_blank" rel="noopener noreferrer">
                                {t('academicCalendar.viewPdf')}
                            </a>
                        </p>
                    </div>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default AcademicCalendarBody;

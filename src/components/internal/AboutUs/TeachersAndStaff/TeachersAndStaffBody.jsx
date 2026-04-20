// import { React } from 'react';
import './TeachersAndStaffBody.css';
import FadeIn from '../../../fadeinsection/FadeIn'
import EmployeeTable from './EmployeeTable';
import { employees } from './employees';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function TeachersAndStaffBody() {
    const { t } = useTranslation('about');

    return (
            <div className="teachers-and-staff-container">
                <div className="teachers-and-staff-page-title">
                    <h1>{t('teachersAndStaff.title')}</h1>
                </div>
                <FadeIn>
                    <div className="teachers-and-staff-content">
                        <EmployeeTable employees={employees} />
                    </div>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default TeachersAndStaffBody;

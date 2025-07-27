// import { React } from 'react';
import './TeachersAndStaffBody.css';
import FadeIn from '../../fadeinsection/FadeIn'
import EmployeeTable from './EmployeeTable';
import { employees } from './employees';
import CenteredLogo from '../../CenteredLogo';

function TeachersAndStaffBody() {
    return (
            <div className="teachers-and-staff-container">
                <div className="teachers-and-staff-page-title">
                    <h1> Teachers and Staff </h1>
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
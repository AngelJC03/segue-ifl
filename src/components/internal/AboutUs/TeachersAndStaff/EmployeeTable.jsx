import React, { useState } from 'react';
import './EmployeeTable.css';
import { useTranslation } from '../../../../hooks/useTranslation';

const EmployeeTable = ({ employees }) => {
  const { t } = useTranslation('about');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const employeesPerPage = 20;

  const departments = [
    'All Departments',
    ...Array.from(new Set(employees.map(emp => emp.department)))
  ];

  const filteredEmployees =
    selectedDept === 'All Departments'
      ? employees
      : employees.filter(emp => emp.department === selectedDept);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDept(e.target.value);
    setCurrentPage(1); // reset to first page when filtering
  };

  const renderPagination = (position) => (
    <div className={`pagination-controls ${position}`}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? 'active' : ''}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="employee-table">
      <div className="department-dropdown">
        <label htmlFor="department-select">{t('teachersAndStaff.filterLabel')} </label>
        <select id="department-select" value={selectedDept} onChange={handleDepartmentChange}>
          {departments.map((dept, i) => (
            <option key={i} value={dept}>
              {dept === 'All Departments'
                ? t('teachersAndStaff.allDepartments')
                : t('teachersAndStaff.departments')[dept] ?? dept}
            </option>
          ))}
        </select>
      </div>

      {renderPagination('top-left')}

      <div className="employee-grid">
        {currentEmployees.map((emp, index) => (
          <div key={index} className="employee-card">
            <img src={emp.photo} alt={emp.name} className="employee-photo" />
            <div className="employee-details">
              <h3>{emp.name}</h3>
              <p>{emp.title}</p>
              <p>{t('teachersAndStaff.departments')[emp.department] ?? emp.department}</p>
            </div>
          </div>
        ))}
      </div>

      {renderPagination('bottom-right')}
    </div>
  );
};

export default EmployeeTable;

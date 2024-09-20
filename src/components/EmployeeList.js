import React from 'react';
import EmployeeItem from './EmployeeItem';

const EmployeeList = ({ employees, updateEmployee, deleteEmployee }) => {
    return ( <
        div > {
            employees.map(emp => ( <
                EmployeeItem key = { emp.id }
                employee = { emp }
                updateEmployee = { updateEmployee }
                deleteEmployee = { deleteEmployee }
                />
            ))
        } <
        /div>
    );
};

export default EmployeeList;
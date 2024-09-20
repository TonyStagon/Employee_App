import React from 'react';
import EmployeeItem from './EmployeeItem';

const Database = ({ employees, updateEmployee, deleteEmployee }) => {
    return ( <
        div >
        <
        h1 > Employee Database < /h1> {
            employees.length === 0 ? ( <
                p > No employees found. < /p>
            ) : (
                employees.map(emp => ( <
                    EmployeeItem key = { emp.id }
                    employee = { emp }
                    updateEmployee = { updateEmployee }
                    deleteEmployee = { deleteEmployee }
                    />
                ))
            )
        } <
        /div>
    );
};

export default Database;
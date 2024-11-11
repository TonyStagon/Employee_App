import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Database from './components/Database';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp => (emp.id === id ? updatedEmployee : emp)));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(filter.toLowerCase()) ||
        emp.surname.toLowerCase().includes(filter.toLowerCase())
    );

    return ( <Router>
        <div className = "app" >
        <div className = "navbar" >
        <h1> Employee Portal </h1> <nav className = "nav-links" >
        <Link to = "/" > Home </Link> <Link to = "/database" > Database </Link> </nav > <div className = "search-container" >
        <FaSearch className = "search-icon" />
        <input type = "text"
        placeholder = "Filter"
        value = { filter }
        onChange = {
            (e) => setFilter(e.target.value)
        }/> </div > </div>

        <Routes>
       
        <Route path = "/" element = { <
            >
            <
            EmployeeForm addEmployee = { addEmployee }
            /> {
            filter && filteredEmployees.length > 0 && ( <
                EmployeeList employees = { filteredEmployees }
                updateEmployee = { updateEmployee }
                deleteEmployee = { deleteEmployee }
                />
            )
        } </>
    }/> 
    <Route path = "/database"
    element = { < Database employees = { employees }  updateEmployee = { updateEmployee }   deleteEmployee = { deleteEmployee }  />}/> 
    </Routes>
     </div> 
     </Router>
);
};

export default App;
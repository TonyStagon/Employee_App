import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
    const [employee, setEmployee] = useState({
        id: Date.now(),
        name: '',
        surname: '',
        email: '',
        position: '',
        phone: '',
        image: null,
        startDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({...employee, [name]: value });
    };

    const handleFileChange = (e) => {
        setEmployee({...employee, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(employee).forEach(key => {
            formData.append(key, employee[key]);
        });
        addEmployee({
            ...employee,
            id: Date.now(),
            image: URL.createObjectURL(employee.image) // Convert image file to a URL
        });
        setEmployee({ id: Date.now(), name: '', surname: '', email: '', position: '', phone: '', image: null, startDate: '' });
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input name = "name"
        placeholder = "Name"
        value = { employee.name }
        onChange = { handleChange }
        required / >
        <
        input name = "surname"
        placeholder = "Surname"
        value = { employee.surname }
        onChange = { handleChange }
        required / >
        <
        input name = "email"
        type = "email"
        placeholder = "Email"
        value = { employee.email }
        onChange = { handleChange }
        required / >
        <
        input name = "position"
        placeholder = "Position"
        value = { employee.position }
        onChange = { handleChange }
        required / >
        <
        input name = "phone"
        placeholder = "Phone"
        value = { employee.phone }
        onChange = { handleChange }
        required / >
        <
        input type = "file"
        accept = "image/*"
        onChange = { handleFileChange }
        required / >
        <
        input name = "startDate"
        type = "date"
        value = { employee.startDate }
        onChange = { handleChange }
        required / >
         <button type = "submit" > Add Employee </button> </form >
    );
};

export default EmployeeForm;
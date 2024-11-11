import React, { useState } from 'react';

const EmployeeItem = ({ employee, updateEmployee, deleteEmployee }) => {
    const [isEditing, setEditing] = useState(false);
    const [editData, setEditData] = useState(employee);
    const [editImage, setEditImage] = useState(null);

    const handleEditChange = (e) => {
        setEditData({...editData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setEditImage(e.target.files[0]);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedEmployee = {
            ...editData,
            image: editImage ? URL.createObjectURL(editImage) : editData.image // Use new image if uploaded
        };
        updateEmployee(employee.id, updatedEmployee);
        setEditing(false);
    };

    return (<div className = "employee-item"> {
            isEditing ? ( <form onSubmit = { handleUpdate } >
                <input name = "name"
                value = { editData.name }
                onChange = { handleEditChange }
                placeholder = "Name" />
                <input name = "surname"
                value = { editData.surname }
                onChange = { handleEditChange }
                placeholder = "Surname" / >
                <input name = "email"
                type = "email"
                value = { editData.email }
                onChange = { handleEditChange }
                placeholder = "Email" / >
                <input name = "position"
                value = { editData.position }
                onChange = { handleEditChange }
                placeholder = "Position" / >
                <input name = "phone"
                value = { editData.phone }
                onChange = { handleEditChange }
                placeholder = "Phone" / >
                <input type = "file"
                accept = "image/*"
                onChange = { handleFileChange }
                /> <input name = "startDate"
                type = "date"
                value = { editData.startDate }
                onChange = { handleEditChange }
                /> <button type = "submit" > Save </button> </form >
            ) : ( <div >
                <h3 > { employee.name } { employee.surname } </h3> < p > Email: { employee.email } </p> <p > Position: { employee.position } </p> <p > Phone: { employee.phone } </p> <
                p > Started: { employee.startDate } </p> {
                employee.image && < img src = { employee.image }
                alt = { `${employee.name} ${employee.surname}` }
                style = {
                    { width: '100px' }
                }
                />} <button onClick = {
                    () => setEditing(true)
                } > Edit </button> <button onClick = {
                    () => deleteEmployee(employee.id)
                } > Delete </button> </div >
            )
        } </div>
    );
};

export default EmployeeItem;
import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';

// ... (previous imports)

const UserForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      status: '',
    });
  
    const [tableData, setTableData] = useState([
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
      // Add more initial data as needed
    ]);
  
    const idCounter = React.useRef(tableData.length + 1);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleCellChange = (id, field, value) => {
      // Find the row in tableData with the specified ID
      const updatedTableData = tableData.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      );
  
      // Update the table data state
      setTableData(updatedTableData);
    };
  
    const handleAddRow = () => {
      // Create a new table row based on the form data
      const newRow = {
        id: idCounter.current++,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        status: formData.status,
      };
  
      // Update the table data state with the new row
      setTableData([...tableData, newRow]);
  
      // Clear the form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        status: '',
      });
    };
  
    const handleDeleteRow = (id) => {
      // Filter out the row with the specified ID
      const updatedTableData = tableData.filter((row) => row.id !== id);
  
      // Update the table data state
      setTableData(updatedTableData);
  
      // After deletion, reassign IDs based on the index
      const updatedTableDataWithNewIds = updatedTableData.map((row, index) => ({
        ...row,
        id: index + 1,
      }));
  
      setTableData(updatedTableDataWithNewIds);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission if needed
      console.log(formData);
      console.log(tableData);
    };
  
    return (
      <div className="container mx-auto mt-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 shadow-md">
          <h2 className="text-2xl font-bold mb-6">User Form</h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-600">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* ... (your existing form fields) */}
          <table className="w-full border-collapse border mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border">
                  <td className="py-2 px-4 border">{row.id}</td>
                  <td className="py-2 px-4 border">
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => handleCellChange(row.id, 'name', e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </td>
                  <td className="py-2 px-4 border">
                    <input
                      type="text"
                      value={row.email}
                      onChange={(e) => handleCellChange(row.id, 'email', e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </td>
                  <td className="py-2 px-4 border">
                    <input
                      type="text"
                      value={row.status}
                      onChange={(e) => handleCellChange(row.id, 'status', e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </td>
                  <td className="py-2 px-4 border">
                    <button
                      type="button"
                      onClick={handleAddRow}
                      className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600 focus:outline-none"
                    >
                      <CiCirclePlus />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteRow(row.id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default UserForm;
  

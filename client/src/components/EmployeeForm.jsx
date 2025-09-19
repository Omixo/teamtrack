import { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    salary: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6 space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="dept"
        placeholder="Department"
        value={formData.dept}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;

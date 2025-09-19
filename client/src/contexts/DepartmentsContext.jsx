import { createContext, useContext, useState } from "react";

const DepartmentsContext = createContext();

export const DepartmentsProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080/api/departments";

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/readall`);
      const data = await res.json();
      setDepartments(data);
    } catch (err) {
      setError("Failed to load departments");
    } finally {
      setLoading(false);
    }
  };

  const addDepartment = async (department) => {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(department),
    });
    const data = await res.json();
    setDepartments((prev) => [...prev, data]);
    return data;
  };

  const updateDepartment = async (id, updatedDepartment) => {
    const res = await fetch(`${API_URL}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDepartment),
    });
    const data = await res.json();
    setDepartments((prev) =>
      prev.map((dept) => (dept.id === id ? data : dept))
    );
    return data;
  };

  const deleteDepartment = async (id) => {
    const res = await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
    });
    setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    return res.ok;
  };

  const getDepartmentById = async (id) => {
    try {
      const res = await fetch(`${API_URL}/read/${id}`);
      return await res.json();
    } catch (err) {
      setError("Failed to get department");
      return null;
    }
  };

  return (
    <DepartmentsContext.Provider
      value={{
        departments,
        loading,
        error,
        fetchDepartments,
        addDepartment,
        updateDepartment,
        deleteDepartment,
        getDepartmentById,
      }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};

export const useDepartments = () => useContext(DepartmentsContext);
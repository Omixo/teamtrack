import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080/api/employees"; // ✅ Spring Boot port

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/readall`);
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employee) => {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    const data = await res.json();
    setEmployees((prev) => [...prev, data]); // update local state
    return data;
  };

  const updateEmployee = async (id, updatedEmployee) => {
    const res = await fetch(`${API_URL}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    });
    const data = await res.json();
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? data : emp))
    );
    return data;
  };

  const deleteEmployee = async (id) => {
    const res = await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      return { success: true };
    }
    return { success: false, error: "Delete failed" };
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        loading,
        error,
        fetchEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeesContext);

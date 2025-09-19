import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../contexts/EmployeesContext';
import EmployeeList from '../components/EmployeeList';

const EmployeesPage = () => {
  const { employees, loading, error, deleteEmployee, fetchEmployees } = useEmployees(); // ✅ fetchEmployees bhi lo
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees(); // ✅ page load hote hi latest data fetch kare
  }, []);

  const handleEdit = (employee) => {
    navigate(`/edit/${employee.id}`, { state: employee });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const result = await deleteEmployee(id);
      if (!result.success) {
        alert(result.error || 'Failed to delete employee');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Employee List</h2>
        <button 
          onClick={() => navigate('/add')} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Employee
        </button>
      </div>

      <EmployeeList 
        employees={employees}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EmployeesPage;

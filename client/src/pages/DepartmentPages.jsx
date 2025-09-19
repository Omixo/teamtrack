import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDepartments } from '../contexts/DepartmentsContext';
import DepartmentList from '../components/DepartmentList';

const DepartmentPages = () => {
  const { departments, loading, error, deleteDepartment, fetchDepartments } = useDepartments();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleEdit = (department) => {
    navigate(`/departments/edit/${department.id}`, { state: department });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      const result = await deleteDepartment(id);
      if (!result) {
        alert('Failed to delete department');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Department List</h2>
        <button 
          onClick={() => navigate('/departments/add')} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Department
        </button>
      </div>

      <DepartmentList 
        departments={departments}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DepartmentPages;
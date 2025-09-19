import { useLocation, useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { updateEmployee } from "../services/employeeService";
import { useEmployees } from "../contexts/EmployeesContext"; // ✅ context se fetchEmployees lena

const EditEmployeePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const employeeData = location.state;

  const { fetchEmployees } = useEmployees(); // ✅ ye lena zaroori hai

  const handleUpdate = async (employee) => {
    await updateEmployee(id, employee);
    await fetchEmployees(); // ✅ update ke baad list reload hogi
    navigate("/employees"); // better: employees list pe bhejna
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Employee</h2>
      <EmployeeForm onSubmit={handleUpdate} initialData={employeeData} />
    </div>
  );
};

export default EditEmployeePage;

import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeService";

const AddEmployeePage = () => {
  const navigate = useNavigate();

  const handleAdd = async (employee) => {
    await createEmployee(employee);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Employee</h2>
      <EmployeeForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddEmployeePage;

import axios from "axios";

const API_URL = "http://localhost:8080/api/departments"; 

export const getDepartments = () => axios.get(`${API_URL}/readall`);
export const getDepartmentById = (id) => axios.get(`${API_URL}/read/${id}`);
export const createDepartment = (department) => axios.post(`${API_URL}/add`, department);
export const updateDepartment = (id, department) => axios.put(`${API_URL}/update/${id}`, department);
export const deleteDepartment = (id) => axios.delete(`${API_URL}/delete/${id}`);
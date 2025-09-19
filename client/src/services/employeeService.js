import axios from "axios";

const API_URL = "http://localhost:8080/api/employees"; // adjust if backend runs on another port

export const getEmployees = () => axios.get(`${API_URL}/readall`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/read/${id}`);
export const createEmployee = (employee) => axios.post(`${API_URL}/add`, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/update/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);

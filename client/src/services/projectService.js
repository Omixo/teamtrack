import axios from "axios";

const API_URL = "http://localhost:8080/api/projects"; 

export const getProjects = () => axios.get(`${API_URL}/readall`);
export const getProjectById = (id) => axios.get(`${API_URL}/read/${id}`);
export const createProject = (project) => axios.post(`${API_URL}/add`, project);
export const updateProject = (id, project) => axios.put(`${API_URL}/update/${id}`, project);
export const deleteProject = (id) => axios.delete(`${API_URL}/delete/${id}`);
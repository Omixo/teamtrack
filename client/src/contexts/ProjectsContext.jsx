import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080/api/projects";

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/readall`);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (project) => {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    const data = await res.json();
    setProjects((prev) => [...prev, data]);
    return data;
  };

  const updateProject = async (id, updatedProject) => {
    const res = await fetch(`${API_URL}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    });
    const data = await res.json();
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? data : proj))
    );
    return data;
  };

  const deleteProject = async (id) => {
    const res = await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
    });
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
    return res.ok;
  };

  const getProjectById = async (id) => {
    try {
      const res = await fetch(`${API_URL}/read/${id}`);
      return await res.json();
    } catch (err) {
      setError("Failed to get project");
      return null;
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        loading,
        error,
        fetchProjects,
        addProject,
        updateProject,
        deleteProject,
        getProjectById,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
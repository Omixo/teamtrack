import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectsContext';
import ProjectList from '../components/ProjectList';

const ProjectPages = () => {
  const { projects, loading, error, deleteProject, fetchProjects } = useProjects();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = (project) => {
    navigate(`/projects/edit/${project.id}`, { state: project });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const result = await deleteProject(id);
      if (!result) {
        alert('Failed to delete project');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Project List</h2>
        <button 
          onClick={() => navigate('/projects/add')} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Project
        </button>
      </div>

      <ProjectList 
        projects={projects}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProjectPages;
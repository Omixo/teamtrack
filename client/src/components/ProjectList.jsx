import { Link } from 'react-router-dom';

const ProjectList = ({ projects = [], onDelete, onEdit, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No projects found.</p>
        <Link to="/projects/add" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Your First Project
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">ID</th>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Description</th>
            <th className="py-3 px-4 text-left font-semibold">Start Date</th>
            <th className="py-3 px-4 text-left font-semibold">End Date</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="py-3 px-4">{project.id}</td>
              <td className="py-3 px-4">{project.name}</td>
              <td className="py-3 px-4">{project.description}</td>
              <td className="py-3 px-4">{project.startDate}</td>
              <td className="py-3 px-4">{project.endDate}</td>
              <td className="py-3 px-4 flex space-x-2">
                <button
                  onClick={() => onEdit(project)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(project.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="p-8">
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">🚀 Omkar Tech Solutions</h1>
        <p className="text-gray-300 text-lg">Building smart solutions for HR, IT, and Finance with modern tech.</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/employees" className="inline-block bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-md">
            <div className="flex items-center">
              <span className="text-2xl mr-2">👥</span>
              <span>Manage Employees</span>
            </div>
          </Link>
          
          <Link to="/departments" className="inline-block bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700 transition-all transform hover:-translate-y-1 shadow-md">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏢</span>
              <span>Manage Departments</span>
            </div>
          </Link>
          
          <Link to="/projects" className="inline-block bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-md">
            <div className="flex items-center">
              <span className="text-2xl mr-2">📊</span>
              <span>Manage Projects</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-gray-800 mb-3">🏢 About Us</h2>
          <p className="text-gray-600 leading-relaxed">Omkar Tech Solutions is a leading IT services company focused on building enterprise-level HR, Payroll, and Employee Management systems.</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-gray-800 mb-3">🌍 Mission</h2>
          <p className="text-gray-600 leading-relaxed">Our mission is to empower businesses by providing scalable, secure, and user-friendly platforms.</p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-gray-800 mb-3">🔄 Integrated Management</h2>
          <p className="text-gray-600 leading-relaxed">Our TeamTrack platform provides seamless integration between employees, departments, and projects for efficient resource management.</p>
        </div>
      </div>
    </div>
  )
}


export default HomePage
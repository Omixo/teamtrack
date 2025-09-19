import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { EmployeesProvider } from "./contexts/EmployeesContext";
import { DepartmentsProvider } from "./contexts/DepartmentsContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";

// Lazy load the pages
const EmployeesPage = lazy(() => import("./pages/EmployeePages"));
const AddEmployeePage = lazy(() => import("./pages/AddEmployeePage"));
const EditEmployeePage = lazy(() => import("./pages/EditEmployeePage"));
const DepartmentPages = lazy(() => import("./pages/DepartmentPages"));
const ProjectPages = lazy(() => import("./pages/ProjectPages"));

const App = () => {
  return (
    <EmployeesProvider>
      <DepartmentsProvider>
        <ProjectsProvider>
          <Router>
            <Navbar />
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Employee Routes */}
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/add" element={<AddEmployeePage />} />
                <Route path="/edit/:id" element={<EditEmployeePage />} />
                
                {/* Department Routes */}
                <Route path="/departments" element={<DepartmentPages />} />
                
                {/* Project Routes */}
                <Route path="/projects" element={<ProjectPages />} />
                
                <Route
                  path="*"
                  element={
                    <div className="p-8 text-center">
                      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </Router>
        </ProjectsProvider>
      </DepartmentsProvider>
    </EmployeesProvider>
  );
};

export default App;

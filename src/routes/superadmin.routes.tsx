
import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

// import { ReactNode } from 'react';



export const superAdminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [

      {
        name: "Create Academic Semester",
        path: 'create-academic-semester',
        element: <CreateAcademicSemester />
      },
      {
        name: "Academic Semester",
        path: 'academic-semester',
        element: <AcademicSemester />
      },
      {
        name: "Academic Department",
        path: 'academic-Department',
        element: <AcademicDepartment />
      },
      {
        name: "Create Academic Department",
        path: 'create-academic-Department',
        element: <CreateAcademicDepartment />
      },
      {
        name: "Academic Faculty",
        path: 'academic-faculty',
        element: <AcademicFaculty />
      },
      {
        name: "Academic Faculty",
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />
      },
    ]
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },

    ],
  },
];

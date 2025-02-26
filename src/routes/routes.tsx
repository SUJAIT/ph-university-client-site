import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerators";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import { superAdminPaths } from "./superadmin.routes";
// import { adminRoutes } from "./admin.routes";



const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/admin',
      element: <App />,
      children: routeGenerator(adminPaths),
    },
    {
      path: '/superAdmin',
      element: <App />,
      children: routeGenerator(superAdminPaths),
    },
    {
      path: '/faculty',
      element: <App />,
      children: routeGenerator(facultyPaths),
    },
    {
      path: '/student',
      element: <App />,
      children: routeGenerator(studentPaths),
    },
    {
      path: '/login',
      element: <Login />,
    },

  ]);

export default router;
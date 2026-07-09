import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home/Home';
import { ROUTES } from './routes.constant';
import Doctors from '../pages/Doctors/Doctors';
import Employees from '../pages/Employees/Employees';
import Hospitals from '../pages/Hospitals/Hospitals';
import Monitoring from '../pages/Monitoring/Monitoring';
import Reports from '../pages/Reports/Reports';
import Settings from '../pages/Settings/Settings';
import Tasks from '../pages/Tasks/Tasks';
import Products from '../pages/Products/Products';
import AuthLayout from '../pages/Auth/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from '@/pages/Auth/ResetPassword/ResetPassword';

export default function AppRouter() {
    const routes = createBrowserRouter([
        {
            path: '/', element: <Layout />, children: [
                { index: true, element: <Navigate to={ROUTES.HOME} replace /> },
                { path: ROUTES.HOME, element: <Home /> },
                { path: ROUTES.EMPLOYEES, element: <Employees /> },
                { path: ROUTES.DOCTORS, element: <Doctors /> },
                { path: ROUTES.HOSPITALS, element: <Hospitals /> },
                { path: ROUTES.MONITORING, element: <Monitoring /> },
                { path: ROUTES.PRODUCTS, element: <Products /> },
                { path: ROUTES.TASKS, element: <Tasks /> },
                { path: ROUTES.REPORTS, element: <Reports /> },
                { path: ROUTES.SETTINGS, element: <Settings /> },
            ]
        },
        {
            path: '/auth', element: <AuthLayout />, children: [
                { path: ROUTES.LOGIN, element: <Login /> },
                { path: ROUTES.REGISTER, element: <Register /> },
                { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> },
                { path: ROUTES.RESET_PASSWORD, element: <ResetPassword /> },

            ]
        }
    ])
    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

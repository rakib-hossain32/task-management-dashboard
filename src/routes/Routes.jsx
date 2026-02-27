import React from 'react';
import { createBrowserRouter } from "react-router";
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardOverview from '../pages/dashboard/Overview';
import Login from '../pages/auth/Login';
import NotFound from '../pages/error/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        index: true,
        Component: DashboardOverview,
      },
      {
        path: '/tasks',
        Component: () => <div className="p-10 text-center"><h2 className="text-2xl font-bold text-primary">Task Management Page</h2><p className="text-secondary mt-2">Content changes here while Sidebar/TopBar stay fixed.</p></div>,
      },
      {
        path: '/calendar',
        Component: () => <div className="p-10 text-center"><h2 className="text-2xl font-bold text-primary">Calendar Page</h2><p className="text-secondary mt-2">Content changes here while Sidebar/TopBar stay fixed.</p></div>,
      },
      {
        path: '/analytics',
        Component: () => <div className="p-10 text-center"><h2 className="text-2xl font-bold text-primary">Analytics Page</h2><p className="text-secondary mt-2">Content changes here while Sidebar/TopBar stay fixed.</p></div>,
      },
    ]
  },
  {
    path: "/auth/login",
    Component: Login,
  }
]);

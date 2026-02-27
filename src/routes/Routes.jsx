import React from 'react';
import { createBrowserRouter } from "react-router";
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardOverview from '../pages/dashboard/Overview';
import Login from '../pages/auth/Login';
import NotFound from '../pages/error/NotFound';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    // Protected Layout: only accessible when logged in
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        Component: DashboardLayout,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            Component: DashboardOverview,
          },
          {
            path: '/tasks',
            Component: () => (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <h2 className="text-3xl font-black text-primary">Tasks</h2>
                <p className="text-secondary font-medium">Your task list will appear here.</p>
              </div>
            ),
          },
          {
            path: '/calendar',
            Component: () => (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <h2 className="text-3xl font-black text-primary">Calendar</h2>
                <p className="text-secondary font-medium">Your calendar will appear here.</p>
              </div>
            ),
          },
          {
            path: '/analytics',
            Component: () => (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <h2 className="text-3xl font-black text-primary">Analytics</h2>
                <p className="text-secondary font-medium">Detailed analytics will appear here.</p>
              </div>
            ),
          },
          {
            path: '/team',
            Component: () => (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <h2 className="text-3xl font-black text-primary">Team</h2>
                <p className="text-secondary font-medium">Your team members will appear here.</p>
              </div>
            ),
          },
        ]
      }
    ]
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "*",
    Component: NotFound,
  }
]);

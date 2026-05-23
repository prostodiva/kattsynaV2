import Root from "./root/Root";
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from "./pages/homePage/";

const ExperiencePage = lazy(() => import('@/pages/experiencePage/'));
const AboutMePage = lazy(() => import('./pages/aboutMePage/'));
const SkillsPage = lazy(() => import('@/pages/skillsPage/'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/experience',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ExperiencePage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <AboutMePage />
          </Suspense>
      },
      {
        path: '/skills',
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsPage />
          </Suspense>
      },
    ],
  },
] as RouteObject[]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

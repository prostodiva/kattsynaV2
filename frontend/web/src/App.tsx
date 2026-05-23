import Root from "./root/Root";
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from "./pages/homePage/";

const StorePage = lazy(() => import('./pages/storePage/'));
const AboutUsPage = lazy(() => import('./pages/aboutUsPage/'));
const SupportPage = lazy(() => import('./pages/supportPage/'));
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
        path: '/store',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <StorePage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUsPage />
          </Suspense>
      },
      {
        path: '/support',
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <SupportPage />
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

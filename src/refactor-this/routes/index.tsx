import { Navigate, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import ImageViewer from '../pages/ImageViewer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/nature" />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ':category',
        element: <ImageViewer />,
      },
    ],
  },
])

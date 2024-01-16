import { RouterProvider } from 'react-router-dom'
import { ImageProvider } from './context';
import { router } from './routes'

const App = () => {
  return (
    <ImageProvider>
      <RouterProvider router={router} />
    </ImageProvider>
  )
}

export default App

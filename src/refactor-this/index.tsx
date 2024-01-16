import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'

const container = document.getElementById('main-view') as HTMLElement
const root = createRoot(container!)
root.render(<App />)

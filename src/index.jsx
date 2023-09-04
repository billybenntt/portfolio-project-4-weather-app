import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'
import { AppProvider } from './hooks/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App/>
  </AppProvider>,
)

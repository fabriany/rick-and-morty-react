import './App.css'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import { Router } from './Router';
import NotFoundPage from './pages/404';
import SearchPage from './pages/SearchPage';

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  { 
    path: '/about',
    Component: AboutPage
  },
  { 
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <Router routes={routes} defaultComponent={NotFoundPage}/>
    </>
  )
}

export default App

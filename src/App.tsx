import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import Header from './components/Header'
import RoutesApp from './routes/RoutesApp'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  )
}

export default App

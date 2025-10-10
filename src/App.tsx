import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import Header from './components/Header'
import RoutesApp from './routes/RoutesApp'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

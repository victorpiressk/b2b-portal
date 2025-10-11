import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesApp from './routes/RoutesApp'
import store from './store'
import GlobalStyles from './globalStyles'

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

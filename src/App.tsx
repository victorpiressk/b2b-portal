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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Tailwind CSS Funcionando!
          </h1>
          <p className="text-gray-600">
            Se voce esta vendo este texto estilizado, o Tailwind esta configurado corretamente.
          </p>
        </div>
      </div>
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

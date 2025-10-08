import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)

export default RoutesApp

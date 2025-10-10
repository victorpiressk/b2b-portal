import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SupplierPageDemo from '../pages/SupplierPageDemo'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/supplier" element={<SupplierPageDemo />} />
  </Routes>
)

export default RoutesApp

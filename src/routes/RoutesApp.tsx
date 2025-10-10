import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SupplierPageDemo from '../pages/SupplierPageDemo'
import BuyerPageDemo from '../pages/BuyerPageDemo'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/supplier" element={<SupplierPageDemo />} />
    <Route path="/buyer" element={<BuyerPageDemo />} />
  </Routes>
)

export default RoutesApp

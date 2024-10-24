import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Product from './components/product/Product'

function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <Router>
      <Routes>
        <Route path="/add-product" element={<Product />} />
      </Routes>
    </Router>
    </div>
  )

}

export default App

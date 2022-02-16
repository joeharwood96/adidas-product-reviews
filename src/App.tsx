import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";

// Pages
import ProductOverview from './pages/ProductOverview';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductOverview />} />
      </Routes>
    </div>
  )
}

export default App

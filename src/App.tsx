import {
  Routes,
  Route
} from "react-router-dom";

// Pages
import ProductsOverview from './pages/ProductsOverview';
import Review from './pages/Review';

// Components 
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsOverview />} />
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </div>
  )
}

export default App

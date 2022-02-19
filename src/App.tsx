import React, { createContext, useState } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

// Pages
import ProductsOverview from './pages/ProductsOverview';
import Review from './pages/Review';

// Components 
import Header from './components/Header'

interface Search {
  searchString: string
  onChange: (event: { target: { value: string } }) => void
}

export const SearchContext = createContext<Search | null>(null);

function App() {
  const [searchString, setSearchString] = useState<string>('')

  const onChange = (event: { target: { value: string } }) => {
    setSearchString(event.target.value)
  }

  const searchContext = {
    searchString,
    onChange
  }

  return (
    <SearchContext.Provider value={searchContext}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductsOverview />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  )
}

export default App

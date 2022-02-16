import './App.css'
import { useProductsQuery } from './services/product' 

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery()

  return (
    <div className="App">
      { isLoading && <h1>Loading...</h1>}
      { error && <h2>Something went wrong...</h2>}
      { isSuccess && (
        <div>
          {data?.map(product => {
            return <h3>{product.name}</h3>
          })}
        </div>
      )}
    </div>
  )
}

export default App

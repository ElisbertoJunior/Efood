import Header from './components/Header'
import ProductsList from './components/ProductsList'
import GlobalStyle from './styles'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ProductsList />
    </div>
  )
}

export default App

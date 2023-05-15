import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}

export default App

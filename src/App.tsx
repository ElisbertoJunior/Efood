import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

import Footer from './components/Footer'
import Routes from './Routes'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App

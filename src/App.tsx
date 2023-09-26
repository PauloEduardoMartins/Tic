import Admin from './components/Admin'
import Necessidades from './components/Necessidades'
import Login from './components/Login'
import AdicionarItens from './components/AdicionarItens'
import { ProdutoP } from './components/ProdutoP'
import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// componente funcional
function App() {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produto" element={<ProdutoP />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/Necessidades" element={<Necessidades/>}/>
          <Route path="/adicionarItens" element={<AdicionarItens/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App

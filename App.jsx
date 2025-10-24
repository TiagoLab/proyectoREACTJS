import './App.css'
import Header from './clase-03/Header.jsx' 
import Nav from './clase-03/Nav.jsx'
import Footer from './clase-03/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './clase-06/Inicio.jsx'
import Contacto from './clase-06/Contacto.jsx'
import DetalleProducto from './clase-06/DetalleProducto.jsx'
import Admin from './clase-07/Admin.jsx'
import Login from './clase-07/Login.jsx'
import RutaProtegida from './clase-07/RutaProtegida.jsx'
import { useState } from 'react'

function App() {
  // Modificación por Tiago: renombré variables para personalizar el código
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const manejarInicioSesion = () => setUsuarioAutenticado(true);
  const manejarCierreSesion = () => setUsuarioAutenticado(false);
  
  return (
    <>
      <Header/>
      <Nav/>
      {
        usuarioAutenticado ? 
          (<button onClick={manejarCierreSesion}>Cerrar sesión</button>) :
          (<button onClick={manejarInicioSesion}>Iniciar sesión</button>) 
      }
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/admin' element={
          <RutaProtegida estaAutenticado={usuarioAutenticado}>
            <Admin/>
          </RutaProtegida>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/producto/:id' element={<DetalleProducto/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App

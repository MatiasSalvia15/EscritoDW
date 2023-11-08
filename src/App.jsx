import { useState } from 'react'
import './App.css'

const CrearUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  

return(
  <div>
    <form action="">
      <h1>Form</h1>
      <input type="text"
      name="name"
      placeholder="ingrese su nombre"
      onChange ={(e) => setNombre(e.target.value)}
       />

      <input type="email "
      name="email"
      placeholder="ingrese su email"
      onChange ={(e) => setEmail(e.target.value)}/>
      
      <input type="number"
      name="celular"
      placeholder="ingrese su celular"
      onChange ={(e) => setCelular(e.target.value)}
      />

      <button>crearUsuario</button>
    </form>
  </div>
)

}

export default CrearUsuario;
import React from 'react';
import '../../App.css';
import '../../styles/Login.css'

function Register() {
    return (
           
        <div className="card card0 border-0">
            <div className="preview-login">
                <div className="preview-login">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row px-3"> 
                            <input className="mb-4" type="text" name="name" placeholder="Ingrese Nombre"/>
                        </div>
                        <div className="row px-3"> 
                            <input  className="mb-4" type="text" name="lastname" placeholder="Ingrese Apellidos "/>
                        </div>
                        <div className="row px-3"> 
                            <input  className="mb-4" type="text" name="telefono" placeholder="Ingrese teléfono "/>
                        </div>
                        <div className="row px-3"> 
                            <select className="mb-4" type="text" name="question">
                                <option>¿En qué ciudad se conocieron tus padres?</option>
                                <option>Nombre mejor amigo de la infancia</option>
                                <option>Nombre de su primera mascota</option>
                                <option>Personaje histórico favorito</option>
                                <option>Ocupación de su abuelo</option>
                            </select>
                        </div>
                        <div className="row px-3"> 
                            <input className="mb-4" type="text" name="answer" placeholder="Respuesta a pregunta de seguridad"/>
                        </div>
                        <div className="row px-3"> 
                            <input className="mb-4" type="text" name="email" placeholder="Ingrese correo electrónico"/>
                        </div>
                        <div className="row px-3"> 
                            <input type="password" name="password" placeholder="Ingrese contraseña"/>
                        </div>                                               
                        <div class="row mb-3 px-3"> <button type="submit" class="btn  text-center form-group-login">Registrarse</button></div>
                    </div>
                </div>
            </div>
                        
        </div>


    );
  }
  
  export default Register
  
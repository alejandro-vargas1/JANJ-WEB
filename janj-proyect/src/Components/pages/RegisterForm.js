import React from 'react';
import '../../App.css';
import '../../styles/Login.css'
const axios= require('axios')


export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            alertFail:false,
            register:{
                name:"",
                lastname:"",
                phone:"",
                question:"",
                answer:"",
                email:"",
                password:"",
            }
        }
    }
    onChange =(event)=>{
        this.setState({
            register: {
            ...this.state.register,
            [event.target.name]:event.target.value,
             }
        })
    }
    register=async()=>{
        if(this.state.register.question === "")
            await this.setState({ register:{ ...this.state.register, question: "¿En qué ciudad se conocieron tus padres?"}})
        var data = JSON.stingfy({
            nombre:this.state.name,
            apellido:this.state.lastname,
            telefono:this.state.phone,
            pregunta:this.state.question,
            respuesta:this.state.answer,
            email:this.state.email,
            password:this.state.password,
        })
        var baseurl = String(process.env.REACT_APP_API_URL)
        const url = baseurl+'/signup'
        var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
          };
        axios(config)
        .then(response => {
            console.log(response)
        }) 
    }
    render(){
        return (
            <div className="card card0 border-0">
                <div className="preview-login">
                    <div className="preview-login">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3"> 
                                <input className="mb-4" type="text" onChange={this.onChange} name="name" placeholder="Ingrese Nombre"/>
                            </div>
                            <div className="row px-3"> 
                                <input  className="mb-4" type="text" onChange={this.onChange} name="lastname" placeholder="Ingrese Apellidos "/>
                            </div>
                            <div className="row px-3"> 
                                <input  className="mb-4" type="text" onChange={this.onChange} name="phone" placeholder="Ingrese teléfono "/>
                            </div>
                            <div className="row px-3"> 
                                <select className="mb-4" type="text"onChange={this.onChange} name="question">
                                    <option>¿En qué ciudad se conocieron tus padres?</option>
                                    <option>Nombre mejor amigo de la infancia</option>
                                    <option>Nombre de su primera mascota</option>
                                    <option>Personaje histórico favorito</option>
                                    <option>Ocupación de su abuelo</option>
                                </select>
                            </div>
                            <div className="row px-3"> 
                                <input className="mb-4" type="text" onChange={this.onChange} name="answer" placeholder="Respuesta a pregunta de seguridad"/>
                            </div>
                            <div className="row px-3"> 
                                <input className="mb-4" type="text" onChange={this.onChange} name="email" placeholder="Ingrese correo electrónico"/>
                            </div>
                            <div className="row px-3"> 
                                <input type="password" className="mb-4" onChange={this.onChange} name="password" placeholder="Ingrese contraseña"/>
                            </div>                                               
                            <div className="row mb-3 px-3"> <button type="submit" onClick={this.register} class="btn  text-center form-group-login">Registrarse</button></div>
                        </div>
                    </div>
                </div>          
            </div>
        );
      } 
    }
import React from 'react';
import '../../App.css';
import Collapse from 'react-bootstrap/Collapse'

import NavBar from '../navbar/Navbar'

class RecoverPassword extends React.Component{

    constructor(props){
        super(props);
        this.state={  
          isOpenQuestion : false,
          isOpenPassword : false,
        }
      }

      handleChange=async e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
        console.log(e.target.name);
      }

      toggleQuestion = () => {
        this.setState({isOpenQuestion: !this.state.isOpenQuestion});
      }

      togglePassword = () => {
        this.setState({isOpenPassword: !this.state.isOpenPassword});
      }


    render(){
    return (
        <div>
            <NavBar/>
            <div>
            <section id="recover">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-center"> 
                        <h1>¿Olvidaste tu contraseña</h1>
                        <input placeholder="Ingresa el Correo Electrónico registrado" type="email"/>
                        <button className="btn-get-started" onClick={this.toggleQuestion} aria-controls="example-collapse-text" aria-expanded={this.state.isOpenQuestion}>Enviar</button>
                    </div>
                </div>
                <Collapse in={this.state.isOpenQuestion}>
                    <div id="example-collapse-text">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4 text-center"> 
                                <h1>Responda la siguiente pregunta de seguridad</h1>
                                <h2>Acá va la pregunta</h2>
                                <input type="text" placeholder="Respuesta"></input>
                                <button className="btn-get-started">Enviar</button>
                            </div>
                        </div>
                        </div>
                </Collapse>
                
                        {/* <h1>Tu contraseña es:</h1> */}
                    </section>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 320" >
                <path fill="#00ff77" fill-opacity="0.5" d="M0,64L21.8,85.3C43.6,107,87,149,131,170.7C174.5,192,218,192,262,181.3C305.5,171,349,149,393,160C436.4,171,480,213,524,197.3C567.3,181,611,107,655,80C698.2,53,742,75,785,96C829.1,117,873,139,916,149.3C960,160,1004,160,1047,181.3C1090.9,203,1135,245,1178,234.7C1221.8,224,1265,160,1309,112C1352.7,64,1396,32,1418,16L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
            </svg>  
        </div>  
                 
                        


    );
  }
}
  
  export default RecoverPassword
  
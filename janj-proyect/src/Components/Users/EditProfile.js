import React from 'react'
import '../../App.css';
import '../../assets/css/style.css';
import NavBar from '../navbar/NavbarU'
import {Line} from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from '@material-ui/core';


const carrousel = [
    {
        title: 'AMZN',
        price: 123,
        currency: 'USD',
        status:'',
        data:{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
            {
                label: 'AMZN',
                data: [12, 19, 3, 5, 2, 3],
                // fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },
    {
        title: 'BTC',
        price: 45,
        currency: 'USD',
        status:'',
        data:{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
            {
                label: 'AMZN',
                data: [12, 19, 3, 5, 2, 3],
                // fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },

]


const UserData={
    nombre:"Jorge Orobio Auz",
    correo:"jorge@gmail.com",
    contraseña:"password",
    pregunta:1,
    respuesta:"hola",
}

const Preguntas=[ "buenas","hola", "adios", "malas"]

export default class Editprofile extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            index:0,
            userData:{
                nombre:"",
                correo:"",
                contraseña:"",
            }
        }
        this.initial_state()
    }
    initial_state=()=>{
        this.setState({
            userData: {
                ...this.state.userData,
                nombre: UserData.nombre,
                correo: UserData.correo,
                contraseña: UserData.contraseña,
                pregunta: UserData.pregunta,
                respuesta: UserData.respuesta,
            }
        })
    }
    onChange=(e)=>{
        this.setState({
            userData:{
                ...this.state.userData,
                [e.target.name]:e.target.value
            }
        })
    }
    onSelect=()=>{

    }
    handleSelectCarrousel=(selectedIndex,e)=>{
        this.setState({ index:selectedIndex})
    }   

    ControlledCarousel=()=> {
        var html = []
        const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }
        for(const i in carrousel){
            var item = 
            <Carousel.Item>
                <div className="row">
                    <div className="col-lg-2"/> 
                    <div className="col-lg-4"> 
                        <h1> Divisa: {carrousel[i].title} </h1>
                        <p>Precio: {carrousel[i].price} {carrousel[i].currency}  </p>
                    </div>
                    <div className="col-lg-4"> 
                        <Line data={carrousel[i].data} options={options} />
                    </div>
                </div>
            </Carousel.Item>
            html.push(item)
        }
        return (<>
        <Carousel className="border" activeIndex={this.state.index} onSelect={this.handleSelectCarrousel}>
            {html}
            <Carousel.Item>
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
            </Carousel.Item>
        </Carousel>
        </>);
    }
    Navbar=()=>{
        var html= NavBar(1);
        return(
        <>
        {html}
        </>)
    }
    sendUserData=()=>{
        alert("se envió")
    }
    sendPassword=()=>{
        alert("se envió")
    }
    renderEditarPerfil=()=>{
        return(<>
            <div className="col-lg-2"/> 
            <div className="col-lg-3" style={{border: "1px solid"}}> 
                <h3> Editar Perfil</h3>
                <br/>
                <input className="form-control" type="email" value={this.state.userData.correo} placeholder="Correo Electrónico"  name="correo" onChange={this.onChange} />
                <br/>
                <input className="form-control" type="text" value={this.state.userData.nombre} placeholder="Nombre Completo" name="nombre" onChange={this.onChange} />
                <br/>
                <input className="form-control" type="password" value={this.state.userData.contraseña} placeholder="Contraseña" name="contraseña" onChange={this.onChange} />
                <br/>
                <Button onClick={this.sendUserData}> Enviar </Button> 
            </div>
        
        </>)
    }
    renderPreguntaSeguridad=()=>{
        return(<>
            <div className="col-lg-3" style={{border: "1px solid"}}> 
                <h3> Pregunta de seguridad</h3>
                <br/>
                <select className="form-control" value={Preguntas[this.state.userData.pregunta]} onSelect={this.onSelect} >
                    
                </select>
                <br/>
                <input className="form-control" type="text" value={this.state.userData.nombre}  name="nombre" onChange={this.onChange} />
                <br/>
                <Button onClick={this.sendPassword}> Enviar </Button> 
            </div>
            <div className="col-lg-2"/>
        </>)
    }
    render() {
        return(<>
            <this.Navbar/>
            <h1>Bienvenido {UserData.nombre}</h1>
            <section id="editarperfil"> 
                <div className="row"> 
                {this.renderEditarPerfil()}
                <div className="col-lg-2"/>
                {this.renderPreguntaSeguridad()}
                </div>
                {/* <this.ControlledCarousel /> */}
            </section>
            </>)
        }
    }
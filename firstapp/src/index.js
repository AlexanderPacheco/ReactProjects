import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exercises from './Pages/Exercises';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'


class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  /*
  synEmailChange(email){
    //console.log(email);
    this.setState({
      email:email
    });
  }
  */

  synchanges(value,property){
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state)
  }

  render(){
    return (
      <form>
      <input 
        onChange={(ev)=> { this.synchanges(ev.target.value, 'email') }}
        type="email" 
        value={this.state.email}
        placeholder="Email"
      />
      <input 
        onChange={(ev)=> { this.synchanges(ev.target.value, 'password') }}
        type="password" 
        value={this.state.password}
        placeholder="*****"
      />
      <div>
        <input
          onClick={  this.submitForm } 
          type="submit" 
          value="Iniciar Sesion" 
        />
      </div>
    </form>
    );
    
  }
}

class App2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        {/* <Formulario /> */}  
        
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Exercises/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

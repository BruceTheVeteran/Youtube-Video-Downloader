//client/components/Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { removeFromStorage, getFromStorage, setInStorage} from '../utils/storage';

export default class DiscordControlPanel extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token:'',
      discordUser: null,
      input:'',
      submit:'',
      worked: false,
      reponse: ''
    };


    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginWithDiscord = this.loginWithDiscord.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('sbme');
    if (obj && obj.token) {
      const { token } = obj;
      fetch('/api/discord/login/check?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {

            axios.get(`/api/discord/user?id=${json.message}`)
              .then(response => {
                this.setState({
                  discordUser: response.data,
                  token: json.message,
                  isLoading: false});
              });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }



  loginWithDiscord(){
    fetch(`/api/discord`)
    .then(res => res.json())
    .then(json => {
      setInStorage('sbme', {token: json.token});
      window.location.replace(json.redirect);
    });
  }

  logout(){
    removeFromStorage('sbme')
    window.location.replace("https://slimebots.io");
  }

  handleSubmit(event) {
  event.preventDefault();
  this.setState({
    input: '',
    submit: this.state.input
  });
}

  handleChange(event) {
  this.setState({
    input: event.target.value
  });
}

validate(){
  fetch(`/api/discord/validate?token=${this.state.submit}&id=${this.state.discordUser.id}`)
  .then(res => res.json())
  .then(json => {
    this.setState({
      response: json.message,
      worked: json.message
    });
  });
}



  render() {

   const  { isLoading,discordUser } = this.state
    const center= {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24
    }
    if(isLoading) return(<div><h1>Loading...</h1></div>);
      if(!discordUser){
        return(<div><h1 style={center}>You need to login with Discord!</h1></div>)
      }else{
        return(<div>
          <Form style={center} onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Discord Token</Form.Label>
              <Form.Control value={this.state.input} onChange={this.handleChange} type="text" placeholder="Enter Your Discord Token." />
              <Form.Text className="text-muted">
                We'll never share your token with anyone else.
              </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
              Create Slimebot!
              </Button>
              </Form>

                <h1>Submitted: {this.state.submit}</h1>
                <h1>Response: {this.state.response}</h1>
                <h1>worked: {this.state.worked}</h1>
              <br/>
              <br/>
               <Button onClick={this.validate} variant="primary" size="lg">Validate</Button>


              </div>);
      }
  }

}

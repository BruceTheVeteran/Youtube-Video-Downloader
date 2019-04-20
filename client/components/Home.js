//client/components/Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { removeFromStorage, getFromStorage, setInStorage} from '../utils/storage';
import queryString from 'query-string';


export default class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      link: "",
      input: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  handleSubmit(event) {
  event.preventDefault();
  axios.get(`/api/yt?link=${this.state.input}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  this.setState({
    input: '',
    link: this.state.input
  });
}

  handleChange(event) {
  this.setState({
    input: event.target.value
  });
}






  render() {


    return(<div>
        <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="link">
           <Form.Label>Link Address</Form.Label>
           <Form.Control value={this.state.input} onChange={this.handleChange} type="text" placeholder="Enter Youtube Link" />
           <Form.Text className="text-muted">Paste Youtube Link</Form.Text>
           </Form.Group>
           <Button variant="primary" type="submit">Extract</Button>
           </Form>

        </div>)

  }
}

import React, { Component } from 'react';
// import logo from './logo.svg';
import './customers.css';

class Customers extends Component {
    constructor(){
        super();
        this.state={
            customers: []
        }
    }

    componentDidMount(){ //call to our backend

        fetch('/api/customers') //we have the proxy configured so no need of https://...
        .then(res => res.json()) //we get the response and then setting the sate
        .then(customers =>this.setState({customers}, () => console.log('Customers fetched..', customers)));
        // console.log(this);
    }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}> { customer.firstName } { customer.lastName } </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Customers;

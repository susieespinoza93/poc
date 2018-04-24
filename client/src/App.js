import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import Customers from './components/customers/customers';

class App extends Component {
  render() {
    return (
      <div>
        <a href="http://rulesware.com/" className="fw-site-logo" hidefocus="true">
          <img src="http://rulesware.com/wp-content/uploads/2017/01/logo.png" alt="Rulesware"></img>
        </a>
        <ul className="nav nav-pills pull-right">
          <li role="presentation" className="active"><a href="">History</a></li>
          <li role="presentation"><a href="">User</a></li>
        </ul>

        <div className="row">
          <div className="col-md-12">
              <h2 className="pull-right">              
                <a>
                  <span className="glyphicon glyphicon-plus"></span>
                  Add new workout
                </a>  
              </h2>
          </div>
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <footer className="footer">
          <p> All right reserved - rulesware 2018</p>
        </footer>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="">
                Link
              </NavItem>
              <NavItem eventKey={2} href="">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
</div>  
    );
  }
}

export default App;

    



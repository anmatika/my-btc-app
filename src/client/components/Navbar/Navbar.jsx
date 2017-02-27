import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import './style.scss';

const Navbar = () =>
  <Nav bsStyle="pills" activeKey={1}>
    <NavItem eventKey={1} ><Link to="/price">Price</Link></NavItem>
    <NavItem eventKey={2}><Link to="/foo">Foo</Link></NavItem>
  </Nav>;
export default Navbar;

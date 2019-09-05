import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo192.png';

import './Navbar.css';

function CustomNavbar({ favoriteCount }) {
  return (
    <Navbar className="mb-3" bg="dark" variant="dark">
      <Navbar.Brand className="mr-auto" href="#">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item className="text-white">Favorites: {favoriteCount}</Nav.Item>
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = state => ({
  favoriteCount: state.images.favoriteCount,
});

CustomNavbar.propTypes = {
  favoriteCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(CustomNavbar);

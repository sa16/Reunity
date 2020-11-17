import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from './ReunityLogo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li style={{ marginRight: 30 }}>
        <Link to="/profiles">
          <h3 className="nav-url">
          <i className="fas fa-users" />{' '}
          <span className="hide-sm">Relations</span>
          </h3>
        </Link>
      </li>
      <li style={{ marginRight: 30 }}>
        <Link to="/posts">
          <h3 className="nav-url">
            <i className="fas fa-rss" />{' '}
            <span className="hide-sm">Feed</span>
          </h3>
        </Link>
      </li>
      <li style={{ marginRight: 30 }}>
        <Link to="/dashboard">
          <h3 className="nav-url">
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Profile</span>
          </h3>
        </Link>
      </li>
      <li style={{ marginRight: 30 }}>
        <a onClick={logout} href="#!">
          <h3 className="nav-url">
            <i className="fas fa-sign-out-alt" />{' '}
            <span className="hide-sm">Logout</span>
          </h3>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li style={{ marginRight: 20 }}>
        <Link to="/register"><h3 className="nav-url"><i className="fas fa-user-plus" />{' '}Register</h3></Link> 
      </li>
      <li style={{ marginRight: 20 }}>
        <Link to="/login"><h3 className="nav-url"><i className="fas fa-sign-in-alt" />{' '}Login</h3></Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">
          <img className="main-logo" src={logo} alt="Reunity Logo" />
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
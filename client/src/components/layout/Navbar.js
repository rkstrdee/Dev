import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-home' /> <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/usersdata'>
          <i className='fas fa-id-card' />
          <span className='hide-sm'> Usersdata</span>
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          <i className='fas fa-file-alt' />
          <span className='hide-sm'> Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-users' />{' '}
          <span className='hide-sm'> Profiles</span>
        </Link>
      </li>
      <li>
        <a href='/references'>
          <i className='fas fa-file-alt' />
          <span className='hide-sm'> References</span>
        </a>
      </li>
      <li>
        <a onClick={logout} href='/login'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='/'>
          <i className='fas fa-home' />
          <span className='hide-sm'> Home</span>
        </a>
      </li>
      <li>
        <a href='/references'>
          <i className='fas fa-file-alt' />
          <span className='hide-sm'> References</span>
        </a>
      </li>
      <li>
        <Link to='register'>
          <i className='fas fa-user-plus' />
          <span className='hide-sm'> Register</span>
        </Link>
      </li>
      <li>
        <Link to='/login'>
          <i className='fas fa-sign-in-alt' />
          <span className='hide-sm'> Login</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> AtrocityAct
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

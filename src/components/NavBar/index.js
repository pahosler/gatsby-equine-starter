import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import SearchBox from '../SearchBox'
const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav className='navbar' aria-label='main navigation'>
        <div className='navbar-brand is-centered' style={{ flex: 1, justifyContent: 'center', marginTop: -10 }}>
          <Link to='/' className='navbar-item'>
            <img src='/img/equineadvantage_logo.svg' alt='logo' />
          </Link>
          <div
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            style={{ padding: 10, marginRight: 10, marginTop: 5 }}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-end' style={{ flex: 1, justifyContent: 'center' }}>
            <Link className='navbar-item' to='/'>
            Home
            </Link>
            <Link className='navbar-item' to='/products'>
            Products
            </Link>
            <Link className='navbar-item' to='/highlights'>
            Highlights
            </Link>
            <Link className='navbar-item' to='/contact'>
            Contact
            </Link>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar

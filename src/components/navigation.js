import React, { Component } from 'react';
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
import icon from '../images/icon.png'


class Navigation extends Component {

  render() {

    const { navLinks } = this.props.navLinks

    return (
      <nav>
        <div className="nav-container">
          <div className="icon">
          <Link to="/">
             <span className="text">Connor Callahan</span>
            </Link>
          </div>
          <div className="nav-links">
              {navLinks.map(link => (
                <TransitionLink key={link.name} to={link.link} className="link" activeClassName="active">
                  {link.name}
                </TransitionLink>
              ))}
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@connorwcallahan">
                Blog
              </a>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Connor-Callahan">
                GitHub
              </a>
            </div>
          </div>
      </nav>
    );
  }

}


// <img src={icon} className="favicon" alt="icon"/>

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

// <img src={icon} className="favicon" alt="icon"/>

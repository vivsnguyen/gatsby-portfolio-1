import React, { Component } from 'react';
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
// import icon from '../images/icon.png'


class Navigation extends Component {

  render() {

    const { navLinks } = this.props.navLinks

    return (
      <nav>
        <div className="nav-container">
          <div className="icon">
          <Link to="/">
             <span className="text">Vivi Nguyen</span>
            </Link>
          </div>
          <div className="nav-links">
              {navLinks.map(link => (
                <React.Fragment>
                  <TransitionLink key={link.contactTitle} to={link.contactLink} className="link" activeClassName="active">
                    {link.contactTitle}
                  </TransitionLink>
                  <TransitionLink key={link.aboutTitle} to={link.aboutLink} className="link" activeClassName="active">
                    {link.aboutTitle}
                  </TransitionLink>
                </React.Fragment>
              ))}
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vivsnguyen">
                GitHub
              </a>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://gist.github.com/vivsnguyen/4302a00ae4935fd0077dfda26bd0067c">
                Resume
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

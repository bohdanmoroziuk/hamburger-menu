import { Component } from 'inferno';
import { Link } from 'inferno-router';

export default class HamburgerMenu extends Component {
  render() {
    return (
      <div className="menu-wrap">
        <input className="toggler" type="checkbox" />

        <div className="hamburger">
          <div className="hamburger__line"></div>
        </div>

        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
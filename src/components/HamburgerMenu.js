import { Component } from 'inferno';
import classnames from 'classnames';

import Nav from './Nav';
import Toggler from './Toggler';

import withToggle from '../hocs/withToggle';

export class HamburgerMenu extends Component {
  render() {
    const { toggled, onToggle, menu } = this.props;

    return (
      <>
        <Toggler 
          isToggled={toggled}
          toggle={onToggle}
        />

        <div 
          className={classnames(
            'hamburger-menu', {
            'hamburger-menu--is-shown': toggled
          })}  
        >
          <div className="hamburger-menu__overlay">
            <div className="hamburger-menu__content">
              <Nav links={menu} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withToggle(HamburgerMenu);
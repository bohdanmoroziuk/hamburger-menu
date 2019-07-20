import HamburgerMenu from './components/HamburgerMenu';

import menu from './config/menu';

const App = () => (
  <div className="app">
    <HamburgerMenu
      menu={menu}
    />
  </div>
);

export default App;

import classnames from 'classnames';

const Toggler = ({ isToggled, toggle }) => (
  <div 
    className={classnames(
      'toggler', {
      'toggler--is-toggled': isToggled,
    })}
    onClick={toggle}
  >
    <div className="toggler__line" />
  </div>
);

export default Toggler;
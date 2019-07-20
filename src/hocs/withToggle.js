import { Component, linkEvent } from 'inferno';

const toggle = instance => {
  instance.setState(prevState => ({
    toggled: !prevState.toggled
  }));
};

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      toggled: false
    }

    render() {
      return (
        <WrappedComponent 
          toggled={this.state.toggled}
          onToggle={linkEvent(this, toggle)}
          {...this.props}
        />
      );
    }
  };
};

export default withToggle;
if(!true){
	const MOUNT = document.getElementById('root');
	class App extends React.Component {
	  render() {
	    const klasses = classnames({
	      box: true, // always apply the box class
	      alert: this.props.isAlert, // if the prop is set
	      severity: this.state.onHighAlert, // with state
	      timed: false // never apply this class
	    });
	    return React.createElement(
	      'div',
	      {className: klasses},
	      React.createElement('h1', {}, 'Hello world')
	    );
	  }
	}

	ReactDOM.render(React.createElement(App, {}), MOUNT);
}else{
	var mountElement = document.querySelector('#root');
	var boldElement = React.createElement('b',null,"Text (as a string)");
	var htmlElement = (<div>Hello World</div>);
	ReactDOM.render(htmlElement,mountElement);
}

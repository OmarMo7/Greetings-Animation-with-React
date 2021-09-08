import Form from './components/Form';
import Container from './components/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleSubmit = (data) => {
    if ((data.username === "Darsh" || data.username === "darsh") && data.password === "zzz") {
      this.setState({
        isLoggedIn: true,
        user: data
      })
      return true
    }
    return false
  }

  componentDidMount() {
    window.onpopstate = () => {
      console.log("triggered")
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    }
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact
              path={'/'}
              render={props => (<Form {...props} handleSuccessfulAuth={this.handleSubmit} />)}
            />
            <Route exact
              path={'/user'}
              render={props => (<Container {...props} isLoggedIn={this.state.isLoggedIn} />)}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

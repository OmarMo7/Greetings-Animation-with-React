import Form from './components/Form';
import Container from './components/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//TODO: Justa get the string value of src instead of processing the whole img tag in index.html

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Form />
          </Route>
          <Route path='/user'>
            <Container />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Form from './components/Form';
import Container from './components/Container';
import { BrowserRouter, Route } from 'react-router-dom';

//TODO: Justa get the string value of src instead of processing the whole img tag in index.html

function App() {

  return (
    <div className="App">
      {/* <Container Trans={Trans} Imgs={Imgs} /> */}

      <BrowserRouter>
        {/* <Form Trans={Trans} Imgs={Imgs} /> */}
        <Route exact path='/' component={Form} />
        <Route path='/user' component={Container} />
      </BrowserRouter>
    </div>
  );
}

export default App;

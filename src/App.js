import logo from './logo.svg';
import './App.css';
import React from 'react';
import Preview from './Components/preview';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Test</title>
        <meta property="og:title" content="title"></meta>
        <meta property="og:description" content="description"></meta>
        <meta property="og:image" content={logo}></meta>
        {/* <meta property="og:url" content={`https://www.digrowfa.com/product/${params.id}`}></meta> */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Helmet>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Preview />
    </div>
    // <>
    /* <Router>
      <Switch>
        <Route path="/preview" exact component={Preview}/>
      </Switch>
    </Router> */
    // </>
  );
}

export default App;

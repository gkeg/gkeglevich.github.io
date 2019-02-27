import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentTitle from 'react-document-title';
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home/Home.jsx'
import MetaTags from 'react-meta-tags';

ReactDOM.render(
  <div class="wrapper">
    <MetaTags>
      <meta name="description" content="The personal website of Griffin Keglevich"/>
    </MetaTags>
      <DocumentTitle title="Griffin Keglevich">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </DocumentTitle>
  </div>
  ,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

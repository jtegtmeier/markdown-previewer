import React, {Component} from 'react';
import MarkdownInput from '../modifiers/MarkdownInput'
import MarkdownView from './MarkdownView'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <h1>Markdown Previewer Using React.js</h1>
          <p>By: Jacob Tegtmeier</p>
        </header>
        <div className="main">
          <MarkdownInput/>
          <MarkdownView/>
        </div>
      </div>
    );
  }
}

export default App;

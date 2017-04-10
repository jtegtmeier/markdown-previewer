import React, {Component} from 'react';
import MarkdownInput from '../modifiers/MarkdownInput'
import MarkdownView from './MarkdownView'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MarkdownInput/>
        <MarkdownView/>
      </div>
    );
  }
}

export default App;

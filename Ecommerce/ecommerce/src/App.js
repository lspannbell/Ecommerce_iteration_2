import React, {Component} from 'react';
import PostList from './components/PostList';
import Filter from './components/Filter'
// import Filter from './components/Filter'

import './App.css';

// const image = Images.toDataURL();
class App extends Component {
  render() {
    return (
      <div className="App">
          <Filter />
          <PostList />
      </div>
    );
   }
  }
  

export default App;

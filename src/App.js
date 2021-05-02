import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class App extends React.Component {
  render(){
    return (
      <div>
        <CarsView carsData={[]}/>
      </div>
    );    
  }

}

export default App;

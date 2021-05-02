import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class App extends React.Component {
  // 1) After loading the page, get the data from cars-data.json
  // 2) Convert data to Car class
  // 3) Pass the cars into the carsData prop
  // Where should I put the AJAX call?
  constructor(props){
    super(props);
    // 1) Create a componentDidMount Hook
    // 2) Save the json data into a variable
    // 3) Save the json data into state
    // 4) use State to pass to the carsData prop.
  }

  render(){
    return (
      <div>
        <CarsView carsData={[]}/>
      </div>
    );    
  }

}

export default App;

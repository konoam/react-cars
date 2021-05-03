import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

import Car from './data-models/Car';

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
    this.state = {
      carsData: [],
    }
    // 1) Create a componentDidMount Hook
    // 2) Save the json data into a variable
    // 3) Save the json data into state
    // 4) use State to pass to the carsData prop
  }
  componentDidMount = () => {
    fetch('/cars-data.json')
      .then( (bytes) => {return bytes.json()})
      .then(res => {
        const carsData = res.map( car => new Car(car.brand, car.model, car.year, car.km));
        this.setState({carsData: carsData});
        
      })
      .catch((err) => {
        alert('the ajax has failed')
        console.log(err)
      })
  }

  render(){

    return (
      <div>
        {
        (this.state.carsData && this.state.carsData.length > 0) ? 
          <CarsView carsData={this.state.carsData}/> :
          <h1>Loading...<Spinner animation="border" variant="primary" /></h1>
        }
      </div>
    );    
  }

}

export default App;

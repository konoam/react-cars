import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import Car from './data-models/Car';
class App extends React.Component {
  // npm install react-router-dom
  // Wrap the whole app with HashRouter
  // Create AboutComp which will simply show some text
  // Create 2 routes:
  // 1. The cars table <Route exact path ="/">
  // 2. The about route
  // Add 2 links for homepage and the about, dont forget the #
  constructor(props){
    super(props);
    this.state = {
      carsData: [],
    }

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

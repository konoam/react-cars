import './App.css';
import CarsView from './components/CarsView';
import Car from './data-models/Car';
import 'bootstrap/dist/css/bootstrap.min.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
function App() {
  const car1 = new Car('Mazda', '6', 2017, 10000, 'dfasdf-123-3');
  const car2 = new Car('Bentley', 'T14', 2019, 20000, 'dfdf-32253-3');
  const car3 = new Car('Audi', 'tt', 2018, 15000, 'qqqq-32253-3');  
  const carsArray = [car1, car2, car3];
  return (
    <div>
      <CarsView carsData={carsArray} />
    </div>
  );
}

export default App;

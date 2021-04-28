import React from 'react';
import { Table } from 'react-bootstrap';

import './CarsView.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class CarsView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return (
            <Table striped className="my-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM per year</th>
                    </tr>
                </thead>
            </Table>
        )
    }
}

export default CarsView;
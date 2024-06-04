import React from "react";
import hiluxImage from '../images/hiluxcar.jpg';
import primoImage from '../images/primo.jpg';
import subaruImage from '../images/subalu.jpg';

class Car extends React.Component {
  render() {
    const cars = () => [
      { carName: 'Hilux', price: 3500000, year: 2017, imageUrl: hiluxImage },
      { carName: 'Primo', price: 3000000, year: 2018, imageUrl: primoImage },
      { carName: 'Subaru', price: 2000000, year: 2019, imageUrl: subaruImage }
    ];

    const carList = cars();

    return (
      <div className="cars">
        <h1>List of cars {this.props.name}</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Car Name</th>
              <th>Price</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {carList.map((car, index) => (
              <tr key={index}>
                <td><img src={car.imageUrl} alt={car.carName} style={{ width: '100px', height: 'auto' }} /></td>
                <td>{car.carName}</td>
                <td>{car.price}</td>
                <td>{car.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Car;

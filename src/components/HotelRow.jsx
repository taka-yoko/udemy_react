import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td><img src={hotel.thumbnail} alt={hotel.name} /></td>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
    <td>{hotel.price}</td>
    <td>{hotel.reviewAverage}</td>
    <td>{hotel.reviewCount}</td>
    <td>{hotel.distance}</td>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;

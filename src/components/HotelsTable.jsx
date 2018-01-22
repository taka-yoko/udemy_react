import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels, onSort, sortKey }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          label="値段"
          sortKey="price"
          isSelected={sortKey === 'price'}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh
          label="レビュー"
          sortKey="reviewAverage"
          isSelected={sortKey === 'reviewAverage'}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh
          label="レビュー数"
          sortKey="reviewCount"
          isSelected={sortKey === 'reviewCount'}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh
          label="距離"
          sortKey="distance"
          isSelected={sortKey === 'distance'}
          onSort={key => onSort(key)}
        />
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  onSort: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;

import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({ label, sortKey, onSort, isSelected, isAsc }) => {
  const drawTriangle = () => {
    if (isSelected) {
      if (isAsc) {
        return '▲';
      }
      return '▼';
    }
    return '';
  };

  return (
    <th
      className="hotels-clickable-th"
      onClick={() => onSort(sortKey)}
    >
      {label}{ drawTriangle() }
    </th>
  );
};

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isAsc: PropTypes.bool.isRequired,
};

export default HotelsClickableTh;

import React from 'react';
import { returnDateString } from '../helpers/DateTime';
import { Link } from 'react-router-dom';

const TableRow = props => {
  const cols = [...Object.keys(props.row)];
  const url = `/json?id=${props.row.id}`;
  return (
    <tr>
      {cols.map(item => {
        const value =
          item === 'created_date' ? (
            <Link to={url}>{returnDateString(props.row[item])}</Link>
          ) : (
            <Link to={url}>{props.row[item]}</Link>
          );
        if (item === 'id')
          return (
            <th key={props.row[item]} scope="row">
              {value}
            </th>
          );
        else return <td key={props.row[item]}>{value}</td>;
      })}
    </tr>
  );
};

export default TableRow;

import React from 'react';
import TableRow from './TableRow.js';

class TableView extends React.Component {
  render() {
    console.log(this.props);
    const headers = this.props.data[0]
      ? [...Object.keys(this.props.data[0])]
      : [];
    return (
      <table className="table">
        <thead>
          <tr>
            {headers.map((head, id) => {
              return (
                <th key={id} scope="col">
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((row, id) => {
            return <TableRow key={id} row={row} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default TableView;

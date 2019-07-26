import React from 'react';
import { getJSONList } from '../services/json_service';
import TableView from './TableView';

class JsonLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async getData() {
    const data = await getJSONList();
    this.setState({
      data: data
    });
    console.log(this.state.data);
  }
  async componentDidMount() {
    console.log('called');
    await this.getData();
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p>JSON load</p>
          <TableView data={this.state.data} />
          <button
            className="btn btn-primary btn-xs"
            onClick={() => this.getData()}
          >
            Get data
          </button>
        </div>
      </div>
    );
  }
}

export default JsonLoad;

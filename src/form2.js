import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

class Form2 extends React.Component {
  state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
      Device: "",
      Details: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 column">
              <table
                className="table table-bordered"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Sr No </th>
                    <th className="text-center"> Device </th>
                    <th className="text-center"> Details </th>
                    <th className="text-center"> Actions </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].Device}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <textarea
                          type="text"
                          name="mobile"
                          value={this.state.rows[idx].Details}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger "
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          <AiFillMinusCircle/>
                        </button>
                        &nbsp;
                        <button 
                          type="button" 
                          className="btn btn-success"
                          onClick={this.handleAddRow}
                        >
                          <AiFillPlusCircle/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form2;
import React,{useState} from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
//import { Button } from "react-bootstrap";

function Form2(props){
  // state = {
  //   rows: [{}]
  // };

  const [Rows,setRows] = useState([{}]);
// useEffect(() => {
//   console.log('rows', Rows)
// },[Rows])
  
  const handleDeviceChange = idx => e => {
    const { name, value } = e.target;
    const rows = [Rows];
    rows[idx] = {
      [name]: value
    };
    setRows(rows);
    
  };
  
  const handleDetailsChange = idx => e => {
    const { name, value } = e.target;
    const rows = [Rows];
    rows[idx] = {
      [name]: value
    };
    setRows(rows);
    
  };
  
  const handleAddRow = () => {
    const item = {
      Device: "",
      Details: ""
    };

    setRows([...Rows,item]);
  };
  
  const handleRemoveSpecificRow = (idx) => () => {
    //const rows = [Rows]
    Rows.splice(idx, 1)
    setRows([...Rows]);
  }
 
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(Rows);
  // }
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
                  {Rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        <input
                          type="text"
                          name="Device"
                          value={Rows[idx].Device}
                          onChange={handleDeviceChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <textarea
                          type="text"
                          name="Details"
                          value={Rows[idx].Details}
                          onChange={handleDetailsChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger "
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          <AiFillMinusCircle/>
                        </button>
                        &nbsp;
                        <button 
                          type="button" 
                          className="btn btn-success"
                          onClick={() => handleAddRow()}
                          onClickCapture={console.log(idx)}
                        >
                          <AiFillPlusCircle/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* <Button onClick={handleSubmit}>Submit</Button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Form2;
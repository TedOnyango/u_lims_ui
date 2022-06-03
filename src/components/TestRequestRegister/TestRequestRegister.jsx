import React from "react";
import "./TestRequestTable.css";
import moment from "moment";
import { useHistory } from "react-router-dom";



const TestRequestRegister = () => {
  const history = useHistory();
  const handleClickRowItem = (item) => {
    console.log(item);
  }
  const data = [
    {
      id: 1,
      testRefNo: 25245522524,
      articleName: "Someka White",
      date: moment().format("DD-MM-YYYY hh:mm:ss"),      department: "DIP",
      compoundType: "PVC",
      requestedTests: "Specific Gravity, Tensile, Elongation at Break"
    },
    {
      id: 2,
      testRefNo: 25245458254,
      articleName: "Pigeon",
      date: moment().format("DD-MM-YYYY hh:mm:ss"),      department: "Sheeting",
      compoundType: "EVA",
      requestedTests: "Specific Gravity"
    },
    {
      id: 3,
      testRefNo: 25856855225,
      articleName: "Nima Tan",
      date: moment().format("DD-MM-YYYY hh:mm:ss"),
      department: "PVC Sandals",
      compoundType: "PVC",
      requestedTests: "Specific Gravity, Tensile, Elongation at Break"
    }
  ]
  console.log(data)
  return (
    <div className="table-title">
      <h1>Test Request Register</h1>
<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>Test Request Date</th>
    <th>Test Ref. No</th>
    <th>Article Name</th>
    <th>Department</th>
    <th>Compound Type</th>
    <th>Requested Tests</th>

  </tr>
  </thead>
  <tbody>
  {data.map((item, index) => {
    return (
      <tr key={index} onClick={() => handleClickRowItem(item)}>
    <td>{item.id}</td>
    <td>{item.date}</td>
    <td>{item.testRefNo}</td>
    <td>{item.articleName}</td>
    <td>{item.department}</td>
    <td>{item.compoundType}</td>
    <td>{item.requestedTests}</td>
    <td></td>

  </tr>
    )
      
    })}


  
  </tbody>

  
</table>
    </div>
   
  );
};
export default TestRequestRegister;

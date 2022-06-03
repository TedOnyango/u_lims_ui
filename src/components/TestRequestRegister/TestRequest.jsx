import React from "react";
import MaterialTable from 'material-table'


const TestRequestRegister = () => {
  const data = [
    {
      id: 1,
      articleName: "Someka White",
      date: new Date(),
      department: "DIP",
      compoundType: "PVC",
      requestedTests: "Specific Gravity, Tensile, Elongation at Break"
    },
    {
      id: 2,
      articleName: "Pigeon",
      date: new Date(),
      department: "Sheeting",
      compoundType: "EVA",
      requestedTests: "Specific Gravity"
    },
    {
      id: 3,
      articleName: "Nima Tan",
      date: new Date(),
      department: "PVC Sandals",
      compoundType: "PVC",
      requestedTests: "Specific Gravity, Tensile, Elongation at Break"
    }
  ]
  const columns = [{
    Header: "Id",
    accessor: "id"
  }, 
  {
    Header: "Date",
    accessor: "date"
  },
{
  Header: "Article Name",
  accessor: "articleName"
}, 
{
  Header: "compound Type",
  accessor: "compoundType"
},
{
  Header: "Department",
  accessor: "department"
},{
  Header: "Tests Requested",
  accessor: "requestedTests"
}]
  return (
    <div>Test Request Register
       <MaterialTable columns={columns} daa={data} />
    </div>
   
  );
};
export default TestRequestRegister;

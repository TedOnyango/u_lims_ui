import React from 'react';
import "./TestResults.css"

const TestResults = () => {
  return(
    <div>
      <h2>Test Results</h2>

<table>
  <tr>
    <th>Parameter</th>
    <th>Units</th>
    <th>Results</th>
    <th>Requirement</th>
    <th>Test Method</th>


  </tr>
  <tr>
    <td>Density</td>
    <td>g/cm3</td>
    <td>0.5245</td>
    <td>0.5 max.</td>
    <td>KS 588</td>

  </tr>
  <tr>
    <td>Abrasion Loss</td>
    <td>mm3</td>
    <td>250</td>
    <td>200 max.</td>
    <td>KS 03-390</td>
  </tr>
  <tr>
    <td>Hardness</td>
    <td>IRHD</td>
    <td>54</td>
    <td>50-89</td>
    <td>KS 03-390</td>
  </tr>

</table>
     
    </div>
      )

};
export default TestResults;
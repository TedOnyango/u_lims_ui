import React from 'react';



import HeaderComponent from "../TestReport/HeaderComponent/HeaderComponent";
import TestDetails from "../TestReport/TestDetails/TestDetails";
import TestResults from "../TestReport/TestResults/TestResults";
import Remarks from "../TestReport/Remarks/Remarks";
import TestDoneBy from "../TestReport/DoneBy/TestDoneBy";
import Footer from "../TestReport/Footer/Footer";

const Printing = React.forwardRef((props, ref) => {
 
  return (
    <div ref={ref}>
      <HeaderComponent />
      <TestDetails />
      <TestResults />
      <Remarks />
      <TestDoneBy />
      <Footer />
    
    </div>

  );
});
export default Printing;
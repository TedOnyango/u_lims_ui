import React from 'react';
import './TestReport.css';

const HeaderComponent = () => {
  return (
    <label className="header-container">
      <div className="conpany-detials">
        <div>
          <img className="log-image" src="https://picsum.photos/200/300
" alt="company-logo" />
</div>
        <p id="details-text">Umoja Rubber Products Limited</p>
        <p id="details-text">P. O. Box 452-80109 MTWAPA </p>
        <p id="details-text">Mombasa-Malindi Highway, Kikambala</p>
        <p id="details-text">Tel.: +254 722 204 994</p>
        <p id="details-text">www.umojaafrica.com</p>
        <p id="details-text">Umoja Rubber Products Ltd is an
ISO 9001:2015 Certified Company</p>

    </div>
    <hr></hr>
    <div className="lab-report-text">
        <p>Laboratory Test Repor</p>
    </div>
    <hr></hr>

    <div className="lab-detials">
        <p>Quality Control Laboratory</p>
        <p>Laboratory@umojarubber.comy</p>
        <p>Doc Ref: URPL/QMSFM/QCLAB/8.6</p>
        <p>Version: 1.2</p>
        <p>Page: 1 of 1</p>

    </div>
    </label>
  )

};
export default HeaderComponent;
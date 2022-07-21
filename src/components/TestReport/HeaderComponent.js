import React from 'react';
import './TestReport.css';

const HeaderComponent = () => {
  return (
    <label className="header-container">
      <div className="conpany-detials">
        <img className="log-image" src="/logo.jpg" alt="company-logo" />
        <p>Umoja Rubber Products Limited</p>
        <p>P. O. Box 452-80109 MTWAPA </p>
        <p>Mombasa-Malindi Highway, Kikambala</p>
        <p>Tel.: +254 722 204 994</p>
        <p>www.umojaafrica.com</p>
        <p>Umoja Rubber Products Ltd is an
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
import React from 'react';
import './Header.css';

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
        <p id="details-text"><a className="umoja-link"><u>www.umojaafrica.com</u></a></p>
        <p id="details-text">Umoja Rubber Products Ltd is an ISO 9001:2015 Certified Company</p>

    </div>
    <hr className="hr1"></hr>
    <div className="lab-report-text">
        <p>Laboratory Test Report</p>
    </div>
    <hr className="hr2"></hr>

    <div className="lab-details">
        <p id="lab-detials-text">Quality Control Laboratory</p>
        <p id="lab-detials-text"><a className="email-link"><u>Laboratory@umojarubber.comy</u></a></p>
        <p id="lab-detials-text"><strong>Doc Ref </strong>: URPL/QMSFM/QCLAB/8.6</p>
        <p id="lab-detials-text"><strong>Version</strong>: 1.2</p>
        <p id="lab-detials-text"><strong>Page</strong>: 1 of 1</p>

    </div>
    </label>
  )

};
export default HeaderComponent;
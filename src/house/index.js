import React from 'react';
import './house.css';
import emailIcon from "./Email.png";
import Inquiry from './inquiry';
import { useState } from 'react';

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };

  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{house.country}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{house.address}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          {/* Use backticks for template literals */}
          <img src={`/images/${house.photo}.jpeg`} alt="House" />
        </div>
        <div className="col-md-5">
          {/* Fix className and typo in price */}
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <img
          src={emailIcon}
          height="50"
          alt="inquiry"
          onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry house={house}/>}
        </div>
      </div>
    </div>
  );
};

export default House;

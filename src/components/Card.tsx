import React from 'react';
import "../styles/Card.css";
import { reqInterest } from './types/reqInterest';

export const Card = (props: reqInterest) => {
  return (
    <div>
      <div className="cardIn">
        <div className="card-image">
          <img className="imgCard" src={props.img} alt="" />
        </div>
        <div className="category">{props.tittle}</div>
        <div className="heading">
          {props.text}
          <div className="author">
            {props.textLink}
            <span className="name">
              <a href={props.link}>{props.icon}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
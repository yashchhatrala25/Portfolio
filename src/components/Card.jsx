import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { id, title, description, btnText, url } = props
  return (
    <div className="container flex justify-center items-center">
      <div className="card">
        <div className="box flex justify-center items-center">
          <div className="content">
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <Link to={url}>{btnText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

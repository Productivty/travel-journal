import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Body(props) {
  return (
    <div className="card-container">
      <div className="leftside">
        <img
          src={props.place.imageUrl}
          alt={props.place.title}
          className="bodyImg"
        />
      </div>

      <div className="rightside">
        <div className="first-row">
          <span>
            <FontAwesomeIcon className="fontIcon" icon={faLocationDot} />
            <span className="location">{props.place.location}</span>
          </span>
          <a href={props.googleMapsUrl} className="googleurl">
            View on Map
          </a>
        </div>

        <h3 className="placeName">{props.place.title}</h3>
        <p className="date">
          {props.place.startDate} - {props.place.endDate}
        </p>
        <p className="desc">{props.place.description}</p>
      </div>
    </div>
  );
}

export default Body;

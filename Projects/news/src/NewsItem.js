import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import 'animate.css';

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    category,
  } = props;

  let badgeColor = "bg-secondary";

  // switch (category) {
  //   case "business":
  //     badgeColor = "bg-success";
  //     break;
  //   case "entertainment":
  //     badgeColor = "bg-warning";
  //     break;
  //   case "health":
  //     badgeColor = "bg-danger";
  //     break;
  //   case "science":
  //     badgeColor = "bg-primary";
  //     break;
  //   case "sports":
  //     badgeColor = "bg-info";
  //     break;
  //   case "technology":
  //     badgeColor = "bg-dark";
  //     break;
  //   case "general":
  //   default:
  //     badgeColor = "bg-secondary";
  // }

  return (
    <div className="my-3">
      <div className="card animate__animated animate__fadeIn">
        <span
          className={`position-absolute top-0 end-0 badge rounded-pill ${badgeColor} m-2 text-uppercase animate__animated animate__bounceIn`}
          //style={{ zIndex: "1" }}
        >
          {source}
        </span>

        <img
          src={
            !imageUrl
              ? "https://dims.apnews.com/dims4/default/3b8fb88/2147483647/strip/true/crop/4307x2423+0+224/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F41%2F0c63b215ad36ee62a103850794bf%2F2982f1c0e012494ca7fcc2a653a82c95"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

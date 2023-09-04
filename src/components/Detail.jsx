import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";

function Detail(
  index,
  id,
  path,
  title,
  image,
  shortDescription,
  longDescription
) {
  return (
    <div className="">
      <img
        className=""
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        style={{ height: "225px", width: "100%", display: "block" }}
        src={image}
        data-holder-rendered="true"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{longDescription}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link
              type="button"
              className="btn btn-sm btn-outline-secondary"
              to="/dashboard"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

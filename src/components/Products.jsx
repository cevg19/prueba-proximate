import React from "react";
import { Link } from "react-router-dom";

function Products({
  index,
  id,
  path,
  title,
  image,
  shortDescription,
  longDescription,
}) {
  return (
    <div className="col-6 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
          alt={"Imagen " + title}
          style={{ height: "200px", width: "100%", display: "block" }}
          src={image}
          data-holder-rendered="true"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary"
                to={`/dashboard/${id}`}
              >
                Saber más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

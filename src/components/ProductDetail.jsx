import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Detail from "./Detail";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(false);

  //let { index } = useParams();
  let { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    let userInfo = localStorage.getItem("user-info");
    let token = JSON.parse(JSON.parse(userInfo).data).userToken;
    let item = { userToken: token };
    setLoadingScreen(true);
    let result = await fetch(
      "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();

    let productss = JSON.parse(result.data).products;
    let byId = productss.find((e) => e.id == id);

    setProductDetail(byId);
    setLoadingScreen(false);
  }

  return (
    <DefaultLayout>
      {loadingScreen ? (
        <h5 className="display-4">Cargando...</h5>
      ) : (
        <div role="main" className="container">
          <div className="col-6">
            <img
              className=""
              data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
              alt="Thumbnail [100%x225]"
              style={{ height: "225px", width: "100%", display: "block" }}
              src={productDetail.image}
              data-holder-rendered="true"
            />
          </div>
          <h1 className="mt-5">{productDetail.title}</h1>
          <p className="lead ">{productDetail.longDescription}</p>
          <Link
            type="button"
            className="btn btn-sm btn-outline-secondary"
            to="/dashboard"
          >
            Volver
          </Link>
        </div>
      )}
    </DefaultLayout>
  );
}

export default ProductDetail;

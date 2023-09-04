import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Products from "../components/Products";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
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

    setProducts(JSON.parse(result.data).products);
    setLoadingScreen(false);
  }

  return (
    <DefaultLayout>
      <div className="pt-sm-2 pb-sm-2 text-center">
        <h1 className="display-6">Productos</h1>
      </div>
      <div className="container">
        <div className="row">
          {loadingScreen ? (
            <h5 className="display-4">Cargando...</h5>
          ) : (
            products.map((product, index) => (
              <Products
                key={index}
                index={index}
                id={product.id}
                path={product.path}
                title={product.title}
                image={product.image}
                shortDescription={product.shortDescription}
              />
            ))
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Spinner from "../components/Spinner";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const auth = useAuth();

  /*   if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } */
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/dashboard");
    }
  }, []);

  async function login() {
    console.warn(user, password);
    setLoading(true);

    let item = { user, password };
    let result = await fetch(
      "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    try {
      result = await result.json();
    } catch (e) {
      console.log("error", e.message);
    }

    console.warn(JSON.stringify(result));
    
    setLoading(false)
    if (result.status) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/dashboard");
    } else {
      setMessage(result.message)
      navigate("/login")
    }
  }
  return (
    <DefaultLayout>
      <div className="m-o vh-100 row  justify-content-center align-items-center">
        <div className="col-auto ">
          <form className="form-signin">
            <img
              className="mb-4"
              src="https://bslta.in/login/images/login-icon.png"
              alt=""
              width="120"
              height="120"
            />
            <h1 className="h3 mb-3 font-weight-normal">Bienvenido!</h1>

            <input
              type="number"
              className="form-control"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />

            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="checkbox mb-3">
              <label>
                {message}
                {/*    <input type="checkbox" value="remember-me" /> Recordarme */}
              </label>
            </div>
            <button
              onClick={login}
              className="btn btn-lg btn-primary btn-block"
              type="button"
            >
              Ingresar {loading ? <Spinner /> : ""}
            </button>
            
          </form>
          
        </div>
      </div>
    </DefaultLayout>
  );
}

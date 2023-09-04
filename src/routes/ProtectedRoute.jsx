import { Outlet, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export default function ProtectedRoute(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="">
      <Cmp></Cmp>
    </div>
  );
}

import { useState } from "react";

import "./App.css";

import Banner from "./components/Banner";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Banner />
    </DefaultLayout>
  );
}

export default App;

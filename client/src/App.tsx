import Header from "./components/Header";
import ProjectContainer from "./components/ProjectDisplay";
import ProjectDetail from "./components/ProjectDetail";
import { useState, useEffect } from "react";

import "./styles/Header.css";
import "./styles/ProjectDisplay.css";
import "./styles/ProjectDetail.css";

async function login() {
  const res = await fetch("http://localhost:3000/request", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  window.location.href = json.url;
}

function App() {
  return <button onClick={login}>Login</button>;
}

export default App;

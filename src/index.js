import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

function Clock(props){
  return (
    <div>
      <h1>Hello World {props.name}</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  )
}

const rootElement = document.getElementById("root");
function tick(){
  ReactDOM.render(
    <Clock date={new Date()} name={"Admin"}/>,
    rootElement
  )
}

setInterval(tick, 1000)
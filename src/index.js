import { hello } from "./scripts/hello";
import "./styles/style.scss";

const theDiv = document.createElement("div");
theDiv.innerHTML = `<div id="myMemes"></div>`;
document.querySelector("body").appendChild(theDiv);

document.querySelector("#myMemes").innerHTML = `
  <h1>AND IT IS WORKING ??</h1>
`;

hello("Diego");

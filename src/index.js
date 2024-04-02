/*
*	    index.js	
*
*	    Ersteller:		      Kevin Krazius
*	    Erstellungsdatum:	  02-29-2024
*	    Info/Notizen:		    index-Datei ist zuständig für das rendern der App

*	    Editiert von:		    <Name>
*	    Editiert am:		    <Datum>
*     Info/Notizen:		    <Beschreibung der Änderung>		    
*
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

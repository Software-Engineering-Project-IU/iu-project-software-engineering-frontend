/*
 *	HelpContext.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-07-2024
 *	Info/Notizen:		Komponente erstellt, welche die Hilfsanfragen aus der API-Anfrage erstellt
 *
 *	Editiert von:
 *	Editiert am:
 *	Info/Notizen:
 *
 */

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  // Zustände
  const [help, setHelp] = useState([]);

  // Funktion zum Abrufen der Hilfsanfragen für den angemeldeten Benutzer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const helpResponse = await axios.get(
          "http://localhost:3001/help-requests"
        );
        setHelp(helpResponse.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Hilfeanfragen:", error);
      }
    };

    fetchData();
  }, []);

  // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
  return (
    <HelpContext.Provider value={{ help }}>{children}</HelpContext.Provider>
  );
};

export default HelpContext;

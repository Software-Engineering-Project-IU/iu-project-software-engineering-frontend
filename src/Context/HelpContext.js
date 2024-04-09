/*
 *	HelpContext.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-07-2024
 *	Info/Notizen:		Komponente erstellt, welche die Hilfsanfragen aus der API-Anfrage erstellt
 *
 *	Editiert von:     Kevin Krazius
 *	Editiert am:      04-09-2024
 *	Info/Notizen:     Post- und Delete-Anfragen implementiert
 *
 */

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  // Zustände
  const [help, setHelp] = useState([]);

  // Funktion zum Abrufen der Hilfsanfragen für den angemeldeten Benutzer
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

  // Effekt zum Initialisieren der Daten beim ersten Rendern
  useEffect(() => {
    fetchData();
  }, []);

  // Funktion zum Updaten der Hilfsanfragen für den angemeldeten Benutzer
  const updateHelpRequest = async (requestId) => {
    try {
      // Hier die entsprechende URL für die Update-Anfrage einfügen
      await axios.post(
        `http://localhost:3001/help-requests/${requestId}/helpful`,
        {
          is_helpful: true,
        }
      );
      await fetchData();
      // Hilfsanfragen aktualisieren, nachdem die Anfrage erfolgreich war
      setHelp((prevHelp) =>
        prevHelp.map((item) => {
          if (item.id === requestId) {
            return { ...item, is_helpful: true };
          }
          return item;
        })
      );
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Hilfsanfrage:", error);
    }
  };

  // Funktion zum Löschen der Hilfsanfragen für den angemeldeten Benutzer
  const deleteHelpRequest = async (requestId) => {
    try {
      // Hier die entsprechende URL für die Delete-Anfrage einfügen
      await axios.delete(
        `http://localhost:3001/help-requests/${requestId}/delete`
      );
      fetchData();
    } catch (error) {
      console.error("Fehler beim Löschen der Hilfsanfrage:", error);
    }
  };

  // Funktion zum hinzufügen einer neuen Hilfsanfrage
  const newHelpComment = async (helpData) => {
    try {
      console.log(helpData);
      // Hier die entsprechende URL für die Delete-Anfrage einfügen
      await axios.post(
        `http://localhost:3001/help-requests/provide-help`,
        helpData
      );
      fetchData();
    } catch (error) {
      console.error("Fehler beim hinzufügen der Hilfsanfrage:", error);
    }
  };

  // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
  return (
    <HelpContext.Provider
      value={{ help, updateHelpRequest, deleteHelpRequest, newHelpComment }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;

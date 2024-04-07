/*
 *	UserContext.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-07-2024
 *	Info/Notizen:		Komponente erstellt, welche die Userdaten aus der API-Anfrage erstellt
 *
 *	Editiert von:
 *	Editiert am:
 *	Info/Notizen:
 *
 */

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// UserContext erstellen
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Zustand für User
  const [users, setUsers] = useState([]);

  // Funktion zum Abrufen der Userdaten
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:3001/users");
        setUsers(userResponse.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Userdaten:", error);
      }
    };
    fetchData();
  }, []);

  // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export default UserContext;

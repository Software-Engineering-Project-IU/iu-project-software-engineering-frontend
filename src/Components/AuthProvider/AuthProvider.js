/*
*	AuthProvider.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-16-2024
*	Info/Notizen:		Authentication-Provider-Komponente, welche Nutzerdaten validiert
*
*	Editiert von:		
*	Editiert am:		
*	Info/Notizen:		
*
*/

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

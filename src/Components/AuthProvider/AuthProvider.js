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
import { userData } from '../../Data/userTestData';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    const loginUser = (userData) => {
        setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

/*
*	HelpRequest.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-29-2024
*	Info/Notizen:		Komponente um Hilfsanfragen eines Users anzuzeigen, falls vorhanden
*
*	Editiert von:		
*	Editiert am:		
*	Info/Notizen:		
*
*/

import React from 'react';
import { userData } from '../../Data/userTestData';

const HelpRequests = ({ userName }) => {
    const user = userData.find(user => user.userName === userName);
    
    return (
        <div>
            <h2>Deine Hilfsanfragen:</h2>
            {user && user.helpRequests && user.helpRequests.length > 0 ? (
                user.helpRequests.map((request, index) => (
                    <div key={index}>
                        <p>Modul: {request.modulname}</p>
                        <p>Frage: {request.frage}</p>
                    </div>
                ))
            ) : (
                <p>Keine Hilfsanfragen.</p>
            )}
        </div>
    );
};


export default HelpRequests;

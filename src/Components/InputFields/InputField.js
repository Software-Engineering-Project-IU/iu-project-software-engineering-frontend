/*
*	Inputfield.js
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-10-2024
*	Info/Notizen:		Implementierung eines Eingabefelds
*
*	Editiert von:		<Name>
*	Editiert am:		<Datum>
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/


import React from 'react';

const InputField = ({ label, type = 'text', name, value, onChange }) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;

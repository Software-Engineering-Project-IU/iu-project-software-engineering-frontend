/*
 *	Utils.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-11-2024
 *	Info/Notizen:		Hier werden verschiedene Funktionen aufgeführt welche an mehreren Stellen verwendet werden. Funktionen werden direkt exportiert
 *
 *	Editiert von:		<Name>
 *	Editiert am:		<Datum>
 *	Info/Notizen:		<Beschreibung der Änderung>
 *
 */

// Funktion zum Prüfen des E-Mail Formats
export const isValidEmail = (email) => {
  // eslint-disable-next-line
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

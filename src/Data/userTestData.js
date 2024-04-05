/*
 *	userTestData.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-29-2024
 *	Info/Notizen:		Testdaten für User erstellt
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-29-2024
 *	Info/Notizen:		Daten für Hilfsanfragen hinzugefügt
 *
 */

export const userData = [
  {
    id: 1,
    userName: "TestUser",
    password: "iu-projekt",

    // Daten für Hilfsanfragen...
    helpRequests: [
      {
        questionId: 2,
        modulname: "Mathematik",
        frage: "Was ist 2 + 3?",
        providedHelp: "Das ist ein nicht hilfreicher Kommentar!",
      },
    ],
  },
  {
    id: 2,
    userName: "TestUser2",
    password: "iu-projekt",

    // Daten für Hilfsanfragen...
    helpRequests: [
      {
        questionId: 5,
        modulname: "Literatur",
        frage: "Wer ist dieser junge Werther?",
        providedHelp: "Haben Sie versucht ihr Gerät neu zu starten?",
      },
    ],
  },
];

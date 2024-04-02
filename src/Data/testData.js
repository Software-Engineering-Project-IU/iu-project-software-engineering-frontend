// Testdaten für Frontend

/*
 *	testData.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-11-2024
 *	Info/Notizen:		Testdaten
 *
 */

export const testData = [
  // Mathematik Module
  {
    id: 1,
    modulname: "Mathematik",
    frage: "Was ist 2 + 3?",
    antworten: [
      { text: "4", isCorrect: false },
      { text: "5", isCorrect: true },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 2,
    modulname: "Mathematik",
    frage: "Was ist 3 + 4?",
    antworten: [
      { text: "5", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "9", isCorrect: false },
    ],
    isHelpNeeded: false,
  },

  // Geographie Module
  {
    id: 3,
    modulname: "Geographie",
    frage: "Welche Stadt ist die Hauptstadt von Land Nr. 1?",
    antworten: [
      { text: "Stadt 0", isCorrect: false },
      { text: "Stadt 1", isCorrect: true },
      { text: "Stadt 2", isCorrect: false },
      { text: "Stadt 3", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 4,
    modulname: "Geographie",
    frage: "Welche Stadt ist die Hauptstadt von Land Nr. 2?",
    antworten: [
      { text: "Stadt 1", isCorrect: false },
      { text: "Stadt 2", isCorrect: true },
      { text: "Stadt 3", isCorrect: false },
      { text: "Stadt 4", isCorrect: false },
    ],
    isHelpNeeded: false,
  },

  // Biologie Module
  {
    id: 5,
    modulname: "Biologie",
    frage: "Was ist die Hauptfunktion des biologischen Prozesses Nr. 1?",
    antworten: [
      { text: "Funktion 0", isCorrect: false },
      { text: "Funktion 1", isCorrect: true },
      { text: "Funktion 2", isCorrect: false },
      { text: "Funktion 3", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 6,
    modulname: "Biologie",
    frage: "Was ist die Hauptfunktion des biologischen Prozesses Nr. 2?",
    antworten: [
      { text: "Funktion 1", isCorrect: false },
      { text: "Funktion 2", isCorrect: true },
      { text: "Funktion 3", isCorrect: false },
      { text: "Funktion 4", isCorrect: false },
    ],
    isHelpNeeded: false,
  },

  // Literatur Module
  {
    id: 7,
    modulname: "Literatur",
    frage: "Wer ist der Autor des Buches Nr. 1?",
    antworten: [
      { text: "Autor 0", isCorrect: false },
      { text: "Autor 1", isCorrect: true },
      { text: "Autor 2", isCorrect: false },
      { text: "Autor 3", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 8,
    modulname: "Literatur",
    frage: "Wer ist der Autor des Buches Nr. 2?",
    antworten: [
      { text: "Autor 1", isCorrect: false },
      { text: "Autor 2", isCorrect: true },
      { text: "Autor 3", isCorrect: false },
      { text: "Autor 4", isCorrect: false },
    ],
    isHelpNeeded: false,
  },

  // Physik Module
  {
    id: 9,
    modulname: "Physik",
    frage: "Was besagt das Gesetz Nr. 1 in der Physik?",
    antworten: [
      { text: "Gesetz 0", isCorrect: false },
      { text: "Gesetz 1", isCorrect: true },
      { text: "Gesetz 2", isCorrect: false },
      { text: "Gesetz 3", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 10,
    modulname: "Physik",
    frage: "Was besagt das Gesetz Nr. 2 in der Physik?",
    antworten: [
      { text: "Gesetz 1", isCorrect: false },
      { text: "Gesetz 2", isCorrect: true },
      { text: "Gesetz 3", isCorrect: false },
      { text: "Gesetz 4", isCorrect: false },
    ],
    isHelpNeeded: true,
  },

  // Geschichte Module
  {
    id: 11,
    modulname: "Geschichte",
    frage: "Was war ein bedeutendes Ereignis im Jahr 1900?",
    antworten: [
      { text: "Ereignis 0", isCorrect: false },
      { text: "Ereignis 1", isCorrect: true },
      { text: "Ereignis 2", isCorrect: false },
      { text: "Ereignis 3", isCorrect: false },
    ],
    isHelpNeeded: false,
  },
  {
    id: 12,
    modulname: "Geschichte",
    frage: "Was war ein bedeutendes Ereignis im Jahr 1901?",
    antworten: [
      { text: "Ereignis 1", isCorrect: false },
      { text: "Ereignis 2", isCorrect: true },
      { text: "Ereignis 3", isCorrect: false },
      { text: "Ereignis 4", isCorrect: false },
    ],
    isHelpNeeded: true,
  },
];

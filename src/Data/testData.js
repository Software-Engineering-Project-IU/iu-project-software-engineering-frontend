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
    ...Array(15).fill().map((_, index) => ({
        "id": index + 1,
        "modulname": "Mathematik",
        "frage": `Was ist ${index + 2} + ${index + 3}?`,
        "antworten": [
            {"text": `${index + 4}`, "isCorrect": false},
            {"text": `${index + 5}`, "isCorrect": true},
            {"text": `${index + 6}`, "isCorrect": false},
            {"text": `${index + 7}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),

    // Geographie Module
    ...Array(15).fill().map((_, index) => ({
        "id": 15 + index + 1,
        "modulname": "Geographie",
        "frage": `Welche Stadt ist die Hauptstadt von Land Nr. ${index + 1}?`,
        "antworten": [
            {"text": `Stadt ${index}`, "isCorrect": false},
            {"text": `Stadt ${index + 1}`, "isCorrect": true},
            {"text": `Stadt ${index + 2}`, "isCorrect": false},
            {"text": `Stadt ${index + 3}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),

    // Biologie Module
    ...Array(15).fill().map((_, index) => ({
        "id": 30 + index + 1,
        "modulname": "Biologie",
        "frage": `Was ist die Hauptfunktion des biologischen Prozesses Nr. ${index + 1}?`,
        "antworten": [
            {"text": `Funktion ${index}`, "isCorrect": false},
            {"text": `Funktion ${index + 1}`, "isCorrect": true},
            {"text": `Funktion ${index + 2}`, "isCorrect": false},
            {"text": `Funktion ${index + 3}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),

    // Literatur Module
    ...Array(15).fill().map((_, index) => ({
        "id": 45 + index + 1,
        "modulname": "Literatur",
        "frage": `Wer ist der Autor des Buches Nr. ${index + 1}?`,
        "antworten": [
            {"text": `Autor ${index}`, "isCorrect": false},
            {"text": `Autor ${index + 1}`, "isCorrect": true},
            {"text": `Autor ${index + 2}`, "isCorrect": false},
            {"text": `Autor ${index + 3}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),

    // Physik Module
    ...Array(15).fill().map((_, index) => ({
        "id": 60 + index + 1,
        "modulname": "Physik",
        "frage": `Was besagt das Gesetz Nr. ${index + 1} in der Physik?`,
        "antworten": [
            {"text": `Gesetz ${index}`, "isCorrect": false},
            {"text": `Gesetz ${index + 1}`, "isCorrect": true},
            {"text": `Gesetz ${index + 2}`, "isCorrect": false},
            {"text": `Gesetz ${index + 3}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),

    // Geschichte Module
    ...Array(15).fill().map((_, index) => ({
        "id": 75 + index + 1,
        "modulname": "Geschichte",
        "frage": `Was war ein bedeutendes Ereignis im Jahr ${1900 + index}?`,
        "antworten": [
            {"text": `Ereignis ${index}`, "isCorrect": false},
            {"text": `Ereignis ${index + 1}`, "isCorrect": true},
            {"text": `Ereignis ${index + 2}`, "isCorrect": false},
            {"text": `Ereignis ${index + 3}`, "isCorrect": false}
        ],
        "isHelpNeeded": Math.random() < 0.5
    })),
];


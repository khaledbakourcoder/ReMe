export const surveyData = [
    {
        blockId: "block_1",
        title: "Block 1: Nutzung von KI",
        description: null,
        scoreGroup: null,
        questions: [
            {
                id: "q1",
                type: "single-choice",
                text: "Wie häufig nutzen Sie KI-Tools im Studium?",
                options: ["Nie", "Selten", "Manchmal", "Häufig", "Sehr häufig"]
            },
            {
                id: "q2",
                type: "multiple-choice", // Eignet sich hier besser, da Mehrfachnennungen oft sinnvoll sind
                text: "Für welche Aufgaben nutzen Sie KI?",
                options: ["Recherche", "Zusammenfassungen", "Programmierung", "Schreiben von Texten", "Lernen", "Sonstiges"]
            }
        ]
    },
    {
        blockId: "block_2",
        title: "Block 2: Vertrauen in KI",
        scoreGroup: "trust_score",
        questions: [
            {
                id: "q3",
                type: "likert",
                text: "Ich vertraue den Ergebnissen von KI-Systemen.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q4",
                type: "likert",
                text: "KI liefert in den meisten Fällen hilfreiche Ergebnisse.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q5",
                type: "likert",
                text: "Ich kann die Qualität von KI-generierten Inhalten gut einschätzen.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_3",
        title: "Block 3: Risiken",
        scoreGroup: "risk_score",
        questions: [
            {
                id: "q6",
                type: "likert",
                text: "Ich habe Bedenken hinsichtlich Datenschutz und Datensicherheit bei KI.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q7",
                type: "likert",
                text: "Ich befürchte, dass KI falsche Informationen liefern kann.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q8",
                type: "likert",
                text: "Der zunehmende Einsatz von KI kann negative Auswirkungen auf zukünftige Arbeitsplätze haben.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_4",
        title: "Block 4: Akzeptanz",
        scoreGroup: "acceptance_score",
        questions: [
            {
                id: "q9",
                type: "likert",
                text: "Ich nutze KI gerne im Studium.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q10",
                type: "likert",
                text: "Ich würde KI auch in meinem zukünftigen Beruf regelmäßig nutzen.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q11",
                type: "likert",
                text: "Der Einsatz von KI bringt mehr Vorteile als Nachteile.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q12",
                type: "likert",
                text: "Ich würde den Einsatz von KI in Organisationen unterstützen.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_5",
        title: "Die Goldfrage",
        scoreGroup: "qualitative_analysis",
        questions: [
            {
                id: "q13",
                type: "text",
                text: "Was ist aus Ihrer Sicht der wichtigste Faktor für die erfolgreiche Einführung von KI?",
                placeholder: "Bitte geben Sie hier Ihre Antwort ein..."
            }
        ]
    }
];
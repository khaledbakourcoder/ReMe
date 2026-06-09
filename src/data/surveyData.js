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
                text: "Wie oft setzen Sie KI-gestützte Tools in Ihrem Arbeits- oder Lernalltag ein?",
                options: ["Nie", "Selten", "Gelegentlich", "Regelmäßig", "Täglich"]
            },
            {
                id: "q2",
                type: "multiple-choice",
                text: "In welchen Bereichen verwenden Sie KI-Tools? (Mehrfachauswahl möglich)",
                options: [
                    "Informationsbeschaffung & Analyse",
                    "Erstellung von Berichten & Dokumenten",
                    "Softwareentwicklung & Automatisierung",
                    "Kommunikation & E-Mail",
                    "Weiterbildung & Wissensmanagement",
                    "Entscheidungsunterstützung",
                    "Sonstiges"
                ]
            }
        ]
    },
    {
        blockId: "block_2",
        title: "Block 2: Vertrauen in KI",
        description: "1 = Stimme überhaupt nicht zu, 5 = Stimme voll zu",
        scoreGroup: "trust_score",
        questions: [
            {
                id: "q3",
                type: "likert",
                text: "Ich halte KI-Systeme für zuverlässig genug, um ihre Ergebnisse in meiner Arbeit oder meinem Studium zu verwenden.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q4",
                type: "likert",
                text: "KI-Tools unterstützen mich effektiv bei der Bewältigung meiner alltäglichen Aufgaben.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q5",
                type: "likert",
                text: "Ich bin in der Lage, die Qualität und Korrektheit von KI-generierten Ergebnissen kritisch zu beurteilen.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_3",
        title: "Block 3: Risiken",
        description: "1 = Stimme überhaupt nicht zu, 5 = Stimme voll zu",
        scoreGroup: "risk_score",
        questions: [
            {
                id: "q6",
                type: "likert",
                text: "Beim Einsatz von KI sehe ich erhebliche Risiken in Bezug auf den Schutz sensibler Daten – sei es im Unternehmen oder im akademischen Umfeld.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q7",
                type: "likert",
                text: "Ich halte es für wahrscheinlich, dass KI-Systeme fehlerhafte oder verzerrte Informationen produzieren, die ohne kritische Prüfung übernommen werden.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q8",
                type: "likert",
                text: "Ich gehe davon aus, dass die zunehmende Verbreitung von KI bestehende Berufsbilder grundlegend verändern oder gefährden wird.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_4",
        title: "Block 4: Akzeptanz",
        description: "1 = Stimme überhaupt nicht zu, 5 = Stimme voll zu",
        scoreGroup: "acceptance_score",
        questions: [
            {
                id: "q9",
                type: "likert",
                text: "Ich empfinde den Einsatz von KI in meinem Studium oder meiner beruflichen Tätigkeit als gewinnbringend.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q10",
                type: "likert",
                text: "Ich kann mir gut vorstellen, KI-Tools fest in meinen Berufs- oder Studienalltag zu integrieren.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q11",
                type: "likert",
                text: "Aus meiner Sicht überwiegen die Vorteile von KI klar gegenüber den damit verbundenen Risiken.",
                scale: [1, 2, 3, 4, 5]
            },
            {
                id: "q12",
                type: "likert",
                text: "Ich würde die Einführung und den Ausbau von KI-Lösungen in meiner Organisation oder Bildungseinrichtung aktiv befürworten.",
                scale: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        blockId: "block_5",
        title: "Die Goldfrage",
        description: null,
        scoreGroup: "qualitative_analysis",
        questions: [
            {
                id: "q13",
                type: "text",
                text: "Welchen Faktor halten Sie persönlich für entscheidend, damit KI erfolgreich und nachhaltig in Unternehmen oder Bildungseinrichtungen eingeführt werden kann?",
                placeholder: "Bitte geben Sie hier Ihre Antwort ein..."
            }
        ]
    }
];
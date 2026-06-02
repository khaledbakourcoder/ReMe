import React, { useState } from 'react';
import './Survey.css';

// Die strukturierte Datenfragebogen-Konfiguration
import {surveyData} from "../data/surveyData.js";
export default function Survey() {
    const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentBlock = surveyData[currentBlockIndex];
    const totalBlocks = surveyData.length;
    const progressPercentage = ((currentBlockIndex + 1) / totalBlocks) * 100;

    // Handler für Single Choice & Likert (skalierte Werte)
    const handleSingleSelect = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    // Handler für Multiple Choice (speichert Werte in einem Array)
    const handleMultipleSelect = (questionId, option) => {
        const currentSelections = answers[questionId] || [];
        if (currentSelections.includes(option)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: currentSelections.filter(item => item !== option)
            }));
        } else {
            setAnswers(prev => ({
                ...prev,
                [questionId]: [...currentSelections, option]
            }));
        }
    };

    // Handler für offenes Textfeld
    const handleTextChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleNext = () => {
        if (currentBlockIndex < totalBlocks - 1) {
            setCurrentBlockIndex(currentBlockIndex + 1);
            window.scrollTo(0, 0); // Scrollt nach oben beim Blockwechsel
        } else {
            handleSubmit();
        }
    };

    const handlePrevious = () => {
        if (currentBlockIndex > 0) {
            setCurrentBlockIndex(currentBlockIndex - 1);
            window.scrollTo(0, 0);
        }
    };

    // Prüft, ob alle Fragen im aktuellen Block beantwortet wurden
    const isBlockValidationPass = () => {
        return currentBlock.questions.every(question => {
            const answer = answers[question.id];
            if (question.type === "multiple-choice") {
                return answer && answer.length > 0; // Mindestens eine Option gewählt
            }
            if (question.type === "text") {
                return answer && answer.trim().length > 0; // Textfeld nicht leer
            }
            return answer !== undefined && answer !== null; // Wert gesetzt für Single/Likert
        });
    };

    const handleSubmit = async () => {
        // DEINE KOPIERTE GOOGLE WEB-APP URL HIER EINFÜGEN:
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtWIMelZPLKKm6_pXItYAnN0T0Jix1PIn8FWo2JTGZeQCIsY3mMbE-2S4HH53NAUX4Vg/exec";

        try {
            // Sende die Daten an Google Sheets
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Wichtig für Google Apps Script Weiterleitungen
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers),
            });

            // Da wir "no-cors" nutzen, können wir die Response nicht im Detail auslesen,
            // aber wenn kein Fehler geworfen wird, war die Übertragung in der Regel erfolgreich.
            setIsSubmitted(true);

        } catch (error) {
            console.error("Fehler beim Senden an Google Sheets:", error);
            alert("Es gab ein Problem beim Speichern. Bitte versuchen Sie es erneut.");
        }
    };

    if (isSubmitted) {
        return (
            <div className="survey-wrapper">
                <div className="survey-card success-message">
                    <h2>Vielen Dank für Ihre Teilnahme! 🎉</h2>
                    <p>Ihre Antworten wurden erfolgreich übermittelt und fließen in die Score-Auswertungen ein.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="survey-wrapper">
            <div className="survey-card">

                {/* Fortschritts-Header */}
                <div className="survey-header">
                    <div className="block-title">{currentBlock.title}</div>
                    <span className="progress-text">
            Teilbereich {currentBlockIndex + 1} von {totalBlocks}
          </span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>

                {/* Beschreibung des Blocks falls vorhanden */}
                {currentBlock.description && (
                    <div className="block-description">{currentBlock.description}</div>
                )}

                {/* Dynamisches Rendern aller Fragen des aktuellen Blocks */}
                {currentBlock.questions.map((question) => (
                    <div key={question.id} className="question-container">
                        <h3 className="question-text">{question.text}</h3>

                        {/* FALL 1: Single Choice */}
                        {question.type === "single-choice" && (
                            <div className="options-vertical type-single">
                                {question.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        className={`option-button ${answers[question.id] === option ? 'selected' : ''}`}
                                        onClick={() => handleSingleSelect(question.id, option)}
                                    >
                                        <span className="choice-indicator"></span>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* FALL 2: Multiple Choice */}
                        {question.type === "multiple-choice" && (
                            <div className="options-vertical type-multiple">
                                {question.options.map((option, idx) => {
                                    const isSelected = (answers[question.id] || []).includes(option);
                                    return (
                                        <button
                                            key={idx}
                                            className={`option-button ${isSelected ? 'selected' : ''}`}
                                            onClick={() => handleMultipleSelect(question.id, option)}
                                        >
                                            <span className="choice-indicator"></span>
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* FALL 3: Likert-Skala (1 bis 5) */}
                        {question.type === "likert" && (
                            <div className="likert-scale-container">
                                <div className="likert-options">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            className={`likert-button ${answers[question.id] === num ? 'selected' : ''}`}
                                            onClick={() => handleSingleSelect(question.id, num)}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <div className="likert-labels">
                                    <span>Stimme überhaupt nicht zu</span>
                                    <span>Stimme voll zu</span>
                                </div>
                            </div>
                        )}

                        {/* FALL 4: Freitext */}
                        {question.type === "text" && (
                            <textarea
                                className="survey-textarea"
                                placeholder={question.placeholder}
                                value={answers[question.id] || ""}
                                onChange={(e) => handleTextChange(question.id, e.target.value)}
                            />
                        )}
                    </div>
                ))}

                {/* Navigation Controls */}
                <div className="survey-footer">
                    <button
                        className="btn btn-secondary"
                        onClick={handlePrevious}
                        disabled={currentBlockIndex === 0}
                    >
                        Zurück
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={handleNext}
                        disabled={!isBlockValidationPass()} // Deaktiviert den Button bis der Block vollständig ausgefüllt ist
                    >
                        {currentBlockIndex === totalBlocks - 1 ? 'Umfrage absenden' : 'Nächster Schritt'}
                    </button>
                </div>

            </div>
        </div>
    );
}
import React, { useState } from 'react';
import { surveyData } from "../data/surveyData.js";
import SurveyHeader from './SurveyHeader';
import SurveyFooter from './SurveyFooter';
import QuestionRenderer from './QuestionRenderer';

export default function Survey() {
    const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentBlock = surveyData[currentBlockIndex];
    const totalBlocks = surveyData.length;
    const progressPercentage = ((currentBlockIndex + 1) / totalBlocks) * 100;

    // Handler-Logiken (bleiben identisch)
    const handleSingleSelect = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleMultipleSelect = (questionId, option) => {
        const currentSelections = answers[questionId] || [];
        if (currentSelections.includes(option)) {
            setAnswers(prev => ({ ...prev, [questionId]: currentSelections.filter(item => item !== option) }));
        } else {
            setAnswers(prev => ({ ...prev, [questionId]: [...currentSelections, option] }));
        }
    };

    const handleTextChange = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleNext = (e) => {
        if (currentBlockIndex < totalBlocks - 1) {
            setCurrentBlockIndex(currentBlockIndex + 1);
            window.scrollTo(0, 0);
        } else {
            handleSubmit(e);
        }
    };

    const handlePrevious = () => {
        if (currentBlockIndex > 0) {
            setCurrentBlockIndex(currentBlockIndex - 1);
            window.scrollTo(0, 0);
        }
    };

    const isBlockValidationPass = () => {
        return currentBlock.questions.every(question => {
            const answer = answers[question.id];
            if (question.type === "multiple-choice") return answer && answer.length > 0;
            if (question.type === "text") return answer && answer.trim().length > 0;
            return answer !== undefined && answer !== null;
        });
    };

    const handleSubmit = async (e) => {

        e.target.disabled ="true"
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtWIMelZPLKKm6_pXItYAnN0T0Jix1PIn8FWo2JTGZeQCIsY3mMbE-2S4HH53NAUX4Vg/exec";
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(answers),
            });

            setIsSubmitted(true);
        } catch (error) {
            e.target.disabled ="false"
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

                <SurveyHeader
                    title={currentBlock.title}
                    currentBlockIndex={currentBlockIndex}
                    totalBlocks={totalBlocks}
                    progressPercentage={progressPercentage}
                />

                {currentBlock.description && (
                    <div className="block-description">{currentBlock.description}</div>
                )}

                {currentBlock.questions.map((question) => (
                    <div key={question.id} className="question-container">
                        <h3 className="question-text">{question.text}</h3>

                        <QuestionRenderer
                            question={question}
                            answers={answers}
                            onSingleSelect={handleSingleSelect}
                            onMultipleSelect={handleMultipleSelect}
                            onTextChange={handleTextChange}
                        />
                    </div>
                ))}

                <SurveyFooter
                    onPrevious={handlePrevious}
                    onNext={(e)=>handleNext(e)}
                    isFirstBlock={currentBlockIndex === 0}
                    isLastBlock={currentBlockIndex === totalBlocks - 1}
                    isNextDisabled={!isBlockValidationPass()}
                />

            </div>
        </div>
    );
}
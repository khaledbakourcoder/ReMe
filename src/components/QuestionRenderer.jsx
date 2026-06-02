import React from 'react';

export default function QuestionRenderer({ question, answers, onSingleSelect, onMultipleSelect, onTextChange }) {
    const currentAnswer = answers[question.id];

    switch (question.type) {
        case "single-choice":
            return (
                <div className="options-vertical type-single">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            className={`option-button ${currentAnswer === option ? 'selected' : ''}`}
                            onClick={() => onSingleSelect(question.id, option)}
                        >
                            <span className="choice-indicator"></span>
                            {option}
                        </button>
                    ))}
                </div>
            );

        case "multiple-choice":
            return (
                <div className="options-vertical type-multiple">
                    {question.options.map((option, idx) => {
                        const isSelected = (currentAnswer || []).includes(option);
                        return (
                            <button
                                key={idx}
                                className={`option-button ${isSelected ? 'selected' : ''}`}
                                onClick={() => onMultipleSelect(question.id, option)}
                            >
                                <span className="choice-indicator"></span>
                                {option}
                            </button>
                        );
                    })}
                </div>
            );

        case "likert":
            return (
                <div className="likert-scale-container">
                    <div className="likert-options">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`likert-button ${currentAnswer === num ? 'selected' : ''}`}
                                onClick={() => onSingleSelect(question.id, num)}
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
            );

        case "text":
            return (
                <textarea
                    className="survey-textarea"
                    placeholder={question.placeholder}
                    value={currentAnswer || ""}
                    onChange={(e) => onTextChange(question.id, e.target.value)}
                />
            );

        default:
            return <p style={{ color: 'red' }}>Unbekannter Fragentyp: {question.type}</p>;
    }
}
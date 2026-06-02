import React from 'react';

export default function SurveyFooter({ onPrevious, onNext, isFirstBlock, isLastBlock, isNextDisabled }) {
    return (
        <div className="survey-footer">
            <button
                className="btn btn-secondary"
                onClick={onPrevious}
                disabled={isFirstBlock}
            >
                Zurück
            </button>

            <button
                className="btn btn-primary"
                onClick={onNext}
                disabled={isNextDisabled}
            >
                {isLastBlock ? 'Umfrage absenden' : 'Nächster Schritt'}
            </button>
        </div>
    );
}
import React from 'react';

export default function SurveyHeader({ title, currentBlockIndex, totalBlocks, progressPercentage }) {
    return (
        <div className="survey-header">
            <div className="block-title">{title}</div>
            <span className="progress-text">
        Teilbereich {currentBlockIndex + 1} von {totalBlocks}
      </span>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
}
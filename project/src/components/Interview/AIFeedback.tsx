import React from 'react';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';

interface AIFeedbackProps {
  feedback: string;
  score: number;
  suggestions?: string[];
}

const AIFeedback: React.FC<AIFeedbackProps> = ({ feedback, score, suggestions = [] }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 animate-slide-up">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
          <Brain className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
              AI Feedback
            </h3>
            <div className="flex items-center space-x-2">
              <TrendingUp className={`w-5 h-5 ${getScoreColor(score)}`} />
              <span className={`text-xl font-bold ${getScoreColor(score)}`}>
                {score}%
              </span>
            </div>
          </div>
          
          <p className="text-secondary-700 dark:text-secondary-300 mb-4">
            {feedback}
          </p>
          
          {suggestions.length > 0 && (
            <div className="bg-secondary-50 dark:bg-secondary-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-medium text-secondary-900 dark:text-white">
                  Suggestions for Improvement
                </h4>
              </div>
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-secondary-700 dark:text-secondary-300 flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIFeedback;
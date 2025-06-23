import React from 'react';
import { HelpCircle, Tag, Zap } from 'lucide-react';
import { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/20 dark:text-secondary-400';
    }
  };

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 mb-6 animate-slide-up">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
          <HelpCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </span>
            <span className="text-sm text-secondary-600 dark:text-secondary-400 flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>{question.category}</span>
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
            {question.question}
          </h3>
          
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-secondary-500 dark:text-secondary-400" />
            <span className="text-sm text-secondary-600 dark:text-secondary-400">
              Key topics: {question.keywords.slice(0, 3).join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
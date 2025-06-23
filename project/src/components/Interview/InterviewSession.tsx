import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mic, Video, MicOff, VideoOff, Send } from 'lucide-react';
import { questions, jobRoles } from '../../data/mockData';
import { Question, Answer } from '../../types';
import QuestionCard from './QuestionCard';
import RecordingControls from './RecordingControls';
import AIFeedback from './AIFeedback';

interface InterviewSessionProps {
  roleId: string;
  onBack: () => void;
}

const InterviewSession: React.FC<InterviewSessionProps> = ({ roleId, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const role = jobRoles.find(r => r.id === roleId);
  const roleQuestions = questions.filter(q => q.role_id === roleId);

  useEffect(() => {
    // Randomize questions for the session
    const shuffled = [...roleQuestions].sort(() => 0.5 - Math.random());
    setSessionQuestions(shuffled.slice(0, 5)); // Take 5 random questions
  }, [roleId]);

  const currentQuestion = sessionQuestions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (!currentAnswer.trim()) return;

    const answer: Answer = {
      question_id: currentQuestion.id,
      response: currentAnswer,
      score: Math.floor(Math.random() * 30) + 70, // Mock score 70-100
      feedback: generateFeedback(currentAnswer, currentQuestion.keywords),
    };

    setAnswers([...answers, answer]);
    setCurrentAnswer('');

    if (currentQuestionIndex < sessionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSessionCompleted(true);
    }
  };

  const generateFeedback = (answer: string, keywords: string[]): string => {
    const foundKeywords = keywords.filter(keyword => 
      answer.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (foundKeywords.length >= 3) {
      return 'Excellent answer! You covered most key concepts.';
    } else if (foundKeywords.length >= 2) {
      return 'Good answer! Consider mentioning more technical details.';
    } else {
      return 'Your answer could be improved by including more specific technical terms.';
    }
  };

  const getSessionScore = () => {
    if (answers.length === 0) return 0;
    return Math.round(answers.reduce((acc, answer) => acc + answer.score, 0) / answers.length);
  };

  if (sessionCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg border border-secondary-200 dark:border-secondary-700">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">{getSessionScore()}%</span>
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
              Session Complete!
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400">
              Great job practicing {role?.name} interview questions
            </p>
          </div>

          <div className="space-y-6">
            {answers.map((answer, index) => (
              <div key={index} className="bg-secondary-50 dark:bg-secondary-700 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-secondary-900 dark:text-white">
                    Question {index + 1}
                  </h4>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {answer.score}%
                  </span>
                </div>
                <p className="text-sm text-secondary-700 dark:text-secondary-300 mb-2">
                  {sessionQuestions[index]?.question}
                </p>
                <p className="text-xs text-secondary-600 dark:text-secondary-400">
                  {answer.feedback}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-secondary-600 dark:text-secondary-400">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-secondary-900 dark:text-white">
            {role?.name} Interview
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400">
            Question {currentQuestionIndex + 1} of {sessionQuestions.length}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / sessionQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <QuestionCard question={currentQuestion} />

      {/* Recording Controls */}
      <RecordingControls isRecording={isRecording} onToggleRecording={setIsRecording} />

      {/* Answer Input */}
      <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 mb-6">
        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
          Your Answer
        </label>
        <textarea
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          className="w-full h-32 px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white resize-none"
          placeholder="Type your answer here..."
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-secondary-500 dark:text-secondary-400">
            {currentAnswer.length} characters
          </span>
          <button
            onClick={handleAnswerSubmit}
            disabled={!currentAnswer.trim()}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Answer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
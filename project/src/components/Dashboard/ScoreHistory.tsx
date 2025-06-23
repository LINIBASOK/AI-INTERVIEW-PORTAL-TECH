import React from 'react';
import { Calendar, TrendingUp, Award } from 'lucide-react';
import { InterviewSession } from '../../types';
import { jobRoles } from '../../data/mockData';

interface ScoreHistoryProps {
  sessions: InterviewSession[];
}

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ sessions }) => {
  const getRole = (roleId: string) => jobRoles.find(role => role.id === roleId);

  return (
    <div className="space-y-6">
      {sessions.length === 0 ? (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-secondary-400 dark:text-secondary-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-2">
            No sessions yet
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400">
            Start practicing to see your progress here
          </p>
        </div>
      ) : (
        sessions.map((session, index) => {
          const role = getRole(session.role_id);
          return (
            <div
              key={session.id}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${role?.color} bg-opacity-10`}>
                    <Award className={`w-5 h-5 ${role?.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {role?.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(session.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-secondary-900 dark:text-white">
                      {session.score}%
                    </span>
                  </div>
                  <span className="text-sm text-secondary-600 dark:text-secondary-400">
                    {session.questions.length} questions
                  </span>
                </div>
              </div>
              
              <div className="bg-secondary-50 dark:bg-secondary-700 rounded-lg p-4">
                <h4 className="text-sm font-medium text-secondary-900 dark:text-white mb-2">
                  AI Feedback
                </h4>
                <p className="text-sm text-secondary-700 dark:text-secondary-300">
                  {session.feedback}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ScoreHistory;
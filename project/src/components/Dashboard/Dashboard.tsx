import React, { useState } from 'react';
import { Play, TrendingUp, Clock, Award } from 'lucide-react';
import { jobRoles, mockSessions } from '../../data/mockData';
import RoleSelector from './RoleSelector';
import InterviewSession from '../Interview/InterviewSession';
import ScoreHistory from './ScoreHistory';

const Dashboard: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'practice' | 'history'>('practice');

  const stats = [
    {
      icon: Play,
      label: 'Total Sessions',
      value: '12',
      change: '+2 this week',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: TrendingUp,
      label: 'Average Score',
      value: '82%',
      change: '+5% improvement',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Clock,
      label: 'Practice Time',
      value: '4.2h',
      change: 'This month',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Award,
      label: 'Best Score',
      value: '95%',
      change: 'React Developer',
      color: 'text-orange-600 dark:text-orange-400',
    },
  ];

  if (selectedRole) {
    return <InterviewSession roleId={selectedRole} onBack={() => setSelectedRole(null)} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Interview Dashboard
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Track your progress and practice for your dream job
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-secondary-200 dark:border-secondary-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('practice')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'practice'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300'
              }`}
            >
              Practice Sessions
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300'
              }`}
            >
              Score History
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'practice' ? (
        <RoleSelector roles={jobRoles} onSelectRole={setSelectedRole} />
      ) : (
        <ScoreHistory sessions={mockSessions} />
      )}
    </div>
  );
};

export default Dashboard;
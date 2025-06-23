import React from 'react';
import { User, Moon, Sun, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { isDark, toggle } = useTheme();

  return (
    <header className="bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-secondary-900 dark:text-white">
            AI Interview Prep
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
            ) : (
              <Moon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
            )}
          </button>

          {user && (
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-secondary-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-xs text-secondary-500 dark:text-secondary-400">
                  {user.email}
                </p>
              </div>
              <button
                onClick={signOut}
                className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
              >
                <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
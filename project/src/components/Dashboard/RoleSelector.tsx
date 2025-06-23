import React from 'react';
import * as Icons from 'lucide-react';
import { JobRole } from '../../types';

interface RoleSelectorProps {
  roles: JobRole[];
  onSelectRole: (roleId: string) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ roles, onSelectRole }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roles.map((role, index) => {
        const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<any>;
        
        return (
          <div
            key={role.id}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onSelectRole(role.id)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-xl ${role.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                <IconComponent className={`w-8 h-8 ${role.color.replace('bg-', 'text-')}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {role.name}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                  {role.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary-500 dark:text-secondary-400">
                    Ready to practice
                  </span>
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                    <Icons.ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoleSelector;
import React from 'react';
import { CheckCircle, Clock, AlertCircle, Calendar, User, FileText } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending' | 'delayed';
  date: string;
  assignee?: string;
  notes?: string;
}

interface ProgressTrackerProps {
  projectId: string;
  milestones: Milestone[];
  completionPercentage: number;
  estimatedCompletion: string;
}

function ProgressTracker({ projectId, milestones, completionPercentage, estimatedCompletion }: ProgressTrackerProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'delayed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'delayed':
        return 'bg-red-100 border-red-300 text-red-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Completion</div>
            <div className="text-2xl font-bold text-blue-600">{completionPercentage}%</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Est. Completion</div>
            <div className="text-sm font-medium text-gray-900">{estimatedCompletion}</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{completionPercentage}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Connector Line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200"></div>
            )}
            
            <div className="flex items-start space-x-4">
              {/* Status Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                {getStatusIcon(milestone.status)}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-medium text-gray-900">{milestone.title}</h4>
                  <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(milestone.status)}`}>
                    {milestone.status.replace('-', ' ')}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{milestone.description}</p>
                
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {milestone.date}
                  </div>
                  {milestone.assignee && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {milestone.assignee}
                    </div>
                  )}
                </div>
                
                {milestone.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-1">
                      <FileText className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs font-medium text-gray-700">Notes</span>
                    </div>
                    <p className="text-xs text-gray-600">{milestone.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;
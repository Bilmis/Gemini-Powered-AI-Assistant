import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceIndicator = () => {
  const [responseTime, setResponseTime] = useState(0.8);
  const [systemStatus, setSystemStatus] = useState('online');
  const [activeUsers, setActiveUsers] = useState(2400);

  // Mock real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setResponseTime(prev => {
        const variation = (Math.random() - 0.5) * 0.2;
        return Math.max(0.3, Math.min(2.0, prev + variation));
      });
      
      setActiveUsers(prev => {
        const variation = Math.floor((Math.random() - 0.5) * 100);
        return Math.max(1000, Math.min(5000, prev + variation));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (responseTime < 1.0) return 'success';
    if (responseTime < 1.5) return 'warning';
    return 'error';
  };

  const getStatusIcon = () => {
    const status = getStatusColor();
    if (status === 'success') return 'CheckCircle';
    if (status === 'warning') return 'AlertTriangle';
    return 'AlertCircle';
  };

  const formatUserCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="fixed top-20 right-4 z-40 space-y-2">
      {/* System Status */}
      <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-conversation">
        <div className="flex items-center space-x-2 mb-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            getStatusColor() === 'success' ? 'bg-success' :
            getStatusColor() === 'warning' ? 'bg-warning' : 'bg-error'
          }`}></div>
          <span className="text-xs font-medium text-text-primary">System Status</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon 
            name={getStatusIcon()} 
            size={14} 
            color={`var(--color-${getStatusColor()})`} 
          />
          <span className={`text-xs font-medium ${
            getStatusColor() === 'success' ? 'text-success' :
            getStatusColor() === 'warning' ? 'text-warning' : 'text-error'
          }`}>
            {systemStatus === 'online' ? 'Online' : 'Degraded'}
          </span>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-conversation">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Zap" size={14} color="var(--color-text-secondary)" />
          <span className="text-xs font-medium text-text-primary">Response Time</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-semibold ${
            getStatusColor() === 'success' ? 'text-success' :
            getStatusColor() === 'warning' ? 'text-warning' : 'text-error'
          }`}>
            ~{responseTime.toFixed(1)}s
          </span>
          <div className="flex-1 bg-surface-secondary rounded-full h-1.5">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                getStatusColor() === 'success' ? 'bg-success' :
                getStatusColor() === 'warning' ? 'bg-warning' : 'bg-error'
              }`}
              style={{ width: `${Math.max(10, Math.min(100, (2 - responseTime) * 50))}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Active Users */}
      <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-conversation">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Users" size={14} color="var(--color-text-secondary)" />
          <span className="text-xs font-medium text-text-primary">Active Users</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-brand-primary">
            {formatUserCount(activeUsers)}
          </span>
          <span className="text-xs text-text-muted">online</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-2 shadow-conversation">
        <div className="flex space-x-1">
          <button 
            className="p-2 rounded-lg hover:bg-surface-secondary transition-smooth focus-ring"
            title="Refresh connection"
          >
            <Icon name="RefreshCw" size={14} color="var(--color-text-secondary)" />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-surface-secondary transition-smooth focus-ring"
            title="System settings"
          >
            <Icon name="Settings" size={14} color="var(--color-text-secondary)" />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-surface-secondary transition-smooth focus-ring"
            title="Help & support"
          >
            <Icon name="HelpCircle" size={14} color="var(--color-text-secondary)" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceIndicator;
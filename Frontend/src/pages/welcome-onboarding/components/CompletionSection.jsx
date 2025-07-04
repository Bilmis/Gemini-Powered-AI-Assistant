import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompletionSection = ({ onBack }) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'MessageCircle',
      title: 'Natural Conversations',
      description: 'Engage in flowing, context-aware dialogues',
      status: 'Ready'
    },
    {
      icon: 'Mic',
      title: 'Voice Input',
      description: 'Speak naturally for hands-free interaction',
      status: 'Enabled'
    },
    {
      icon: 'Download',
      title: 'Export Conversations',
      description: 'Save important discussions for reference',
      status: 'Available'
    },
    {
      icon: 'History',
      title: 'Conversation Memory',
      description: 'Context awareness across sessions',
      status: 'Active'
    },
    {
      icon: 'Keyboard',
      title: 'Keyboard Shortcuts',
      description: 'Efficient navigation and commands',
      status: 'Configured'
    },
    {
      icon: 'Shield',
      title: 'Privacy Protection',
      description: 'Secure and transparent data handling',
      status: 'Secured'
    }
  ];

  const quickTips = [
    {
      icon: 'Zap',
      title: 'Quick Start',
      tip: 'Press Ctrl+/ to see all keyboard shortcuts'
    },
    {
      icon: 'Search',
      title: 'Smart Search',
      tip: 'Use natural language to find past conversations'
    },
    {
      icon: 'Settings',
      title: 'Customize',
      tip: 'Access preferences anytime from the settings menu'
    }
  ];

  const handleStartChatting = () => {
    navigate('/main-chat-interface');
  };

  const handleRevisitTutorial = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-success to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="CheckCircle" size={40} color="white" strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center">
              <Icon name="Sparkles" size={16} color="white" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-text-primary mb-4">
          You're All Set! 🎉
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Your ChatBot Interface is configured and ready for natural, intelligent conversations. 
          Let's start exploring what AI can do for you.
        </p>
      </div>

      {/* Features Summary */}
      <div className="bg-surface border border-border rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
          Your Personalized Setup
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-background rounded-xl"
            >
              <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature.icon} size={20} color="var(--color-success)" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-text-primary text-sm">{feature.title}</h4>
                  <span className="text-xs bg-success-100 text-success px-2 py-1 rounded-full">
                    {feature.status}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-border rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="Lightbulb" size={24} color="var(--color-accent)" className="mr-3" />
          Pro Tips for Better Conversations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickTips.map((tip, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={tip.icon} size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">{tip.title}</h4>
              <p className="text-sm text-text-secondary">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="bg-surface border border-border rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
          System Status
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-success">Online</span>
            </div>
            <p className="text-sm text-text-secondary">System Status</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Icon name="Zap" size={16} color="var(--color-warning)" />
              <span className="text-lg font-semibold text-text-primary">~0.8s</span>
            </div>
            <p className="text-sm text-text-secondary">Average Response Time</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Icon name="Users" size={16} color="var(--color-primary)" />
              <span className="text-lg font-semibold text-text-primary">2.4k</span>
            </div>
            <p className="text-sm text-text-secondary">Active Users</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="primary"
          size="lg"
          onClick={handleStartChatting}
          iconName="MessageCircle"
          iconPosition="left"
          className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Chatting
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          onClick={handleRevisitTutorial}
          iconName="RotateCcw"
          iconPosition="left"
          className="px-8 py-4 text-lg font-semibold"
        >
          Revisit Tutorial
        </Button>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center">
        <p className="text-text-secondary mb-4">
          Need help getting started? We're here to support you.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center space-x-2 text-primary hover:text-primary-700 transition-colors">
            <Icon name="BookOpen" size={16} />
            <span className="text-sm">Documentation</span>
          </button>
          
          <button className="flex items-center space-x-2 text-primary hover:text-primary-700 transition-colors">
            <Icon name="MessageSquare" size={16} />
            <span className="text-sm">Community Forum</span>
          </button>
          
          <button className="flex items-center space-x-2 text-primary hover:text-primary-700 transition-colors">
            <Icon name="Mail" size={16} />
            <span className="text-sm">Contact Support</span>
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-start mt-12">
        <Button
          variant="ghost"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Back to Practice
        </Button>
      </div>
    </div>
  );
};

export default CompletionSection;
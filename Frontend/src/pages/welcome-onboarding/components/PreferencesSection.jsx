import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PreferencesSection = ({ onNext, onBack }) => {
  const [preferences, setPreferences] = useState({
    conversationTone: 'professional',
    voiceInput: false,
    keyboardNavigation: true,
    screenReader: false,
    darkMode: false,
    fontSize: 'medium',
    animationLevel: 'normal'
  });

  const conversationTones = [
    {
      id: 'professional',
      title: 'Professional',
      description: 'Formal, precise, and business-focused responses',
      icon: 'Briefcase',
      example: 'I\'ll provide a comprehensive analysis of your requirements with actionable recommendations.'
    },
    {
      id: 'casual',
      title: 'Casual',
      description: 'Friendly, conversational, and approachable tone',
      icon: 'Coffee',
      example: 'Sure thing! Let me break this down for you in a way that\'s easy to understand.'
    },
    {
      id: 'detailed',
      title: 'Detailed',
      description: 'Thorough explanations with examples and context',
      icon: 'FileText',
      example: 'Here\'s a detailed explanation with step-by-step instructions, examples, and additional resources.'
    },
    {
      id: 'concise',
      title: 'Concise',
      description: 'Brief, direct answers that get straight to the point',
      icon: 'Zap',
      example: 'Quick answer: Yes. Key points: A, B, C. Next steps: 1, 2, 3.'
    }
  ];

  const accessibilityOptions = [
    {
      id: 'voiceInput',
      title: 'Voice Input',
      description: 'Enable voice-to-text for hands-free interaction',
      icon: 'Mic'
    },
    {
      id: 'keyboardNavigation',
      title: 'Keyboard Navigation',
      description: 'Full keyboard shortcuts and navigation support',
      icon: 'Keyboard'
    },
    {
      id: 'screenReader',
      title: 'Screen Reader Optimization',
      description: 'Enhanced compatibility with screen reading software',
      icon: 'Volume2'
    }
  ];

  const displayOptions = [
    {
      id: 'darkMode',
      title: 'Dark Mode',
      description: 'Reduce eye strain with dark theme',
      icon: 'Moon'
    }
  ];

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Customize Your Experience
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Personalize how you interact with AI to match your preferences and accessibility needs.
        </p>
      </div>

      <div className="space-y-12">
        {/* Conversation Tone */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
            <Icon name="MessageCircle" size={24} color="var(--color-primary)" className="mr-3" />
            Conversation Tone
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {conversationTones.map((tone) => (
              <div
                key={tone.id}
                onClick={() => handlePreferenceChange('conversationTone', tone.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  preferences.conversationTone === tone.id
                    ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    preferences.conversationTone === tone.id
                      ? 'bg-primary text-white' :'bg-surface-secondary text-text-secondary'
                  }`}>
                    <Icon name={tone.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{tone.title}</h4>
                    <p className="text-sm text-text-secondary mb-3">{tone.description}</p>
                    <div className="bg-background p-3 rounded-lg">
                      <p className="text-xs text-text-muted italic">"{tone.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Options */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
            <Icon name="Accessibility" size={24} color="var(--color-secondary)" className="mr-3" />
            Accessibility Features
          </h3>
          
          <div className="space-y-4">
            {accessibilityOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between p-4 bg-background rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Icon name={option.icon} size={20} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{option.title}</h4>
                    <p className="text-sm text-text-secondary">{option.description}</p>
                  </div>
                </div>
                <Input
                  type="checkbox"
                  checked={preferences[option.id]}
                  onChange={(e) => handlePreferenceChange(option.id, e.target.checked)}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Display Preferences */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
            <Icon name="Settings" size={24} color="var(--color-accent)" className="mr-3" />
            Display Preferences
          </h3>
          
          <div className="space-y-6">
            {/* Dark Mode */}
            {displayOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between p-4 bg-background rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Icon name={option.icon} size={20} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{option.title}</h4>
                    <p className="text-sm text-text-secondary">{option.description}</p>
                  </div>
                </div>
                <Input
                  type="checkbox"
                  checked={preferences[option.id]}
                  onChange={(e) => handlePreferenceChange(option.id, e.target.checked)}
                  className="w-5 h-5"
                />
              </div>
            ))}

            {/* Font Size */}
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Type" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Font Size</h4>
                  <p className="text-sm text-text-secondary">Adjust text size for better readability</p>
                </div>
              </div>
              <select
                value={preferences.fontSize}
                onChange={(e) => handlePreferenceChange('fontSize', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>

            {/* Animation Level */}
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Animation Level</h4>
                  <p className="text-sm text-text-secondary">Control interface animations and transitions</p>
                </div>
              </div>
              <select
                value={preferences.animationLevel}
                onChange={(e) => handlePreferenceChange('animationLevel', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">None</option>
                <option value="reduced">Reduced</option>
                <option value="normal">Normal</option>
                <option value="enhanced">Enhanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Eye" size={24} color="var(--color-primary)" className="mr-3" />
            Preview Your Settings
          </h3>
          
          <div className="bg-surface rounded-xl p-6">
            <div className="flex justify-start mb-4">
              <div className="conversation-bubble conversation-bubble-ai">
                <p className="text-sm">
                  {conversationTones.find(t => t.id === preferences.conversationTone)?.example}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Palette" size={16} />
                <span>{preferences.darkMode ? 'Dark' : 'Light'} Mode</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Type" size={16} />
                <span>{preferences.fontSize} Font</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Sparkles" size={16} />
                <span>{preferences.animationLevel} Animations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12">
        <Button
          variant="ghost"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Back
        </Button>
        
        <Button
          variant="primary"
          onClick={onNext}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Next: Practice Conversation
        </Button>
      </div>
    </div>
  );
};

export default PreferencesSection;
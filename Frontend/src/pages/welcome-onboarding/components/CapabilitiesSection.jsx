import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CapabilitiesSection = ({ onNext, onSkip }) => {
  const [selectedExample, setSelectedExample] = useState(0);

  const conversationExamples = [
    {
      id: 'task-focused',
      title: 'Task-Focused Queries',
      description: 'Get precise, actionable responses for work and productivity',
      icon: 'Target',
      color: 'primary',
      conversation: [
        {
          type: 'user',
          message: 'I need to create a project timeline for a 3-month software development project. What are the key milestones I should include?'
        },
        {
          type: 'ai',
          message: `Here's a comprehensive 3-month software development timeline with key milestones:\n\n**Month 1: Planning & Setup**\n• Week 1-2: Requirements gathering and analysis\n• Week 3: Technical architecture design\n• Week 4: Development environment setup\n\n**Month 2: Core Development**\n• Week 5-6: Backend API development\n• Week 7-8: Frontend implementation\n\n**Month 3: Testing & Deployment**\n• Week 9: Integration testing\n• Week 10: User acceptance testing\n• Week 11: Bug fixes and optimization\n• Week 12: Production deployment\n\nWould you like me to elaborate on any specific milestone?`
        }
      ]
    },
    {
      id: 'creative',title: 'Creative Brainstorming',description: 'Explore ideas and unlock creative potential through collaboration',icon: 'Lightbulb',color: 'secondary',
      conversation: [
        {
          type: 'user',message: 'I\'m starting a sustainable fashion brand. Can you help me brainstorm unique marketing angles that would resonate with environmentally conscious consumers?'
        },
        {
          type: 'ai',
          message: `Here are some compelling marketing angles for your sustainable fashion brand:\n\n**Transparency Storytelling**\n• "From Farm to Closet" - Show the complete journey of each garment\n• Real-time supply chain tracking for customers\n\n**Community Impact Focus**\n• Partner with local artisans and showcase their stories\n• "Buy One, Plant One" tree initiative\n\n**Circular Fashion Innovation**\n• Garment take-back program with upcycling workshops\n• "Forever Warranty" with free repairs and alterations\n\n**Educational Content Marketing**\n• Weekly "Sustainable Style Tips" content series\n• Interactive carbon footprint calculator for outfits\n\nWhich direction feels most aligned with your brand vision?`
        }
      ]
    },
    {
      id: 'problem-solving',
      title: 'Problem-Solving Scenarios',
      description: 'Work through complex challenges with structured thinking',
      icon: 'Puzzle',
      color: 'accent',
      conversation: [
        {
          type: 'user',
          message: 'Our team is struggling with remote collaboration. People feel disconnected and meetings are ineffective. How can we improve our remote work culture?'
        },
        {
          type: 'ai',
          message: `Let's address your remote collaboration challenges systematically:\n\n**Immediate Actions (This Week)**\n• Implement "Camera On" policy for key meetings\n• Create dedicated Slack channels for casual conversations\n• Start each meeting with 2-minute personal check-ins\n\n**Medium-term Solutions (Next Month)**\n• Establish "Core Collaboration Hours" when everyone's online\n• Weekly virtual coffee chats or team building activities\n• Shared digital workspace for ongoing projects\n\n**Long-term Culture Building**\n• Monthly in-person or hybrid meetups if possible\n• Recognition system for remote collaboration wins\n• Regular pulse surveys to measure connection levels\n\nWhich area would you like to tackle first? I can help you create an implementation plan.`
        }
      ]
    }
  ];

  const capabilities = [
    {
      icon: 'MessageSquare',
      title: 'Natural Conversations',
      description: 'Engage in flowing, context-aware dialogues that feel genuinely human'
    },
    {
      icon: 'Brain',
      title: 'Intelligent Responses',
      description: 'Get thoughtful, well-reasoned answers that consider multiple perspectives'
    },
    {
      icon: 'Zap',
      title: 'Lightning Fast',
      description: 'Experience sub-second response times without sacrificing quality'
    },
    {
      icon: 'Shield',
      title: 'Privacy First',
      description: 'Your conversations are secure with transparent data handling'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Discover AI Capabilities
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Explore different conversation types and see how our AI adapts to your needs with intelligent, contextual responses.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-surface border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={capability.icon} size={24} color="var(--color-primary)" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {capability.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {capability.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Examples */}
      <div className="bg-surface border border-border rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
          Try Different Conversation Types
        </h3>

        {/* Example Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {conversationExamples.map((example, index) => (
            <button
              key={example.id}
              onClick={() => setSelectedExample(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                selectedExample === index
                  ? `border-${example.color} bg-${example.color}-50 text-${example.color}`
                  : 'border-border bg-surface text-text-secondary hover:border-primary-300'
              }`}
            >
              <Icon 
                name={example.icon} 
                size={20} 
                color={selectedExample === index ? `var(--color-${example.color})` : 'var(--color-text-secondary)'} 
              />
              <div className="text-left">
                <p className="font-medium text-sm">{example.title}</p>
                <p className="text-xs opacity-80">{example.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Conversation Preview */}
        <div className="bg-background rounded-xl p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {conversationExamples[selectedExample].conversation.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3xl px-4 py-3 rounded-2xl ${
                    message.type === 'user' ?'bg-primary text-primary-foreground' :'bg-surface border border-border text-text-primary'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Info */}
        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} color="var(--color-primary)" />
            <div>
              <h4 className="font-medium text-primary mb-1">
                {conversationExamples[selectedExample].title}
              </h4>
              <p className="text-sm text-text-secondary">
                {conversationExamples[selectedExample].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12">
        <Button
          variant="ghost"
          onClick={onSkip}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Skip Tutorial
        </Button>
        
        <Button
          variant="primary"
          onClick={onNext}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Next: Set Preferences
        </Button>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
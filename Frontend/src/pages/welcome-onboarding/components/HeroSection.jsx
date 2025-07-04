import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onGetStarted }) => {
  const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   navigate('/main-chat-interface');
  // };
    const handleGetStarted = () => {
      const existingSession = localStorage.getItem("chatSessionId");
      if (!existingSession) {
        const newSession = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("chatSessionId", newSession);
      }
      navigate('/main-chat-interface');
    };


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Brand */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="Bot" size={40} color="white" strokeWidth={2} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Conversations that feel
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              natural
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Personal Gemini-Powered AI Assistant
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleGetStarted}
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
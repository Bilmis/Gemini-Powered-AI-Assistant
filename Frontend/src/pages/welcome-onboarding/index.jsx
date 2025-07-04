import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProgressIndicator from './components/ProgressIndicator';
import CapabilitiesSection from './components/CapabilitiesSection';
import PreferencesSection from './components/PreferencesSection';
import PracticeSection from './components/PracticeSection';
import CompletionSection from './components/CompletionSection';

const WelcomeOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const steps = [
    {
      title: 'Capabilities',
      subtitle: 'Discover AI features',
      description: 'Learn about different conversation types and AI capabilities'
    },
    {
      title: 'Preferences',
      subtitle: 'Customize experience',
      description: 'Set your conversation tone and accessibility preferences'
    },
    {
      title: 'Practice',
      subtitle: 'Try it out',
      description: 'Practice conversations in a safe, guided environment'
    },
    {
      title: 'Complete',
      subtitle: 'You\'re ready!',
      description: 'Your setup is complete and ready for use'
    }
  ];

  const handleGetStarted = () => {
    setShowOnboarding(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <CapabilitiesSection
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      case 1:
        return (
          <PreferencesSection
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <PracticeSection
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <CompletionSection
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {!showOnboarding ? (
        <HeroSection onGetStarted={handleGetStarted} />
      ) : (
        <div className="pt-8">
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={steps.length}
            steps={steps}
          />
          
          <div className="min-h-screen">
            {renderCurrentSection()}
          </div>
        </div>
      )}

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .shadow-gentle {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .shadow-conversation {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeOnboarding;
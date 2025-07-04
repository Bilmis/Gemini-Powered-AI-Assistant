import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
              {/* Step Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-success border-success text-white'
                    : index === currentStep
                    ? 'bg-primary border-primary text-white' :'bg-surface border-border text-text-secondary'
                }`}
              >
                {index < currentStep ? (
                  <Icon name="Check" size={20} color="white" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              
              {/* Step Label */}
              <div className="mt-2 text-center">
                <p
                  className={`text-sm font-medium ${
                    index <= currentStep ? 'text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-text-muted mt-1 max-w-24">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-border -z-10">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Step Info */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          {steps[currentStep]?.title}
        </h2>
        <p className="text-text-secondary">
          Step {currentStep + 1} of {totalSteps} • {steps[currentStep]?.description}
        </p>
      </div>
    </div>
  );
};

export default ProgressIndicator;
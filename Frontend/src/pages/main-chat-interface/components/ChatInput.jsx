import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChatInput = ({ onSendMessage, isLoading = false, hasStartedChat = false }) => {
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const textareaRef = useRef(null);

  const suggestions = [
    "How can you help me today?",
    "What are your capabilities?",
    "Can you explain complex topics?",
    "Help me brainstorm ideas"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
      setShowSuggestions(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }

    // Show suggestions when input is empty and chat hasn't started
    setShowSuggestions(e.target.value === '' && !hasStartedChat);
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    setShowSuggestions(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    if (message === '' && !hasStartedChat) {
      setShowSuggestions(true);
    }
  }, [message, hasStartedChat]);

  return (
    <div className="relative">
      {/* Smart Suggestions - Only show if chat hasn't started */}
      {/* {showSuggestions && message === '' && !hasStartedChat && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-surface border border-border rounded-xl shadow-lg p-3 conversation-entrance">
          <div className="text-xs font-medium text-text-secondary mb-2 flex items-center space-x-2">
            <Icon name="Lightbulb" size={14} color="var(--color-text-secondary)" />
            <span>Try asking:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-left text-xs p-2 rounded-lg bg-surface-secondary hover:bg-primary hover:text-primary-foreground transition-smooth focus-ring"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )} */}

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-3 p-4 bg-surface border border-border rounded-2xl shadow-conversation">
          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
              className="w-full resize-none border-0 bg-transparent text-text-primary placeholder-text-muted focus:outline-none focus:ring-0 text-sm leading-relaxed min-h-[24px] max-h-[120px]"
              rows={1}
              disabled={isLoading}
            />
            
            {/* Character Count */}
            {message.length > 0 && (
              <div className="absolute -bottom-5 right-0 text-xs text-text-muted">
                {message.length} characters
              </div>
            )}
          </div>

          {/* Send Button - Removed pulse-gentle animation */}
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!message.trim() || isLoading}
            className={`flex-shrink-0 ${!message.trim() || isLoading ? 'opacity-50' : ''}`}
            iconName={isLoading ? "Loader2" : "Send"}
            iconSize={16}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
import React from 'react';
import Icon from '../../../components/AppIcon';
import ReactMarkdown from 'react-markdown';
const ChatMessage = ({ message, isUser, timestamp, isTyping = false }) => {
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  if (isTyping) {
    return (
      <div className="flex items-start space-x-3 mb-4 conversation-entrance">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name="Bot" size={16} color="white" strokeWidth={2} />
        </div>
        <div className="conversation-bubble conversation-bubble-ai">
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-end mb-4 conversation-entrance ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 mr-3 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name="Bot" size={16} color="white" strokeWidth={2} />
        </div>
      )}

      <div className={`conversation-bubble ${isUser ? 'conversation-bubble-user' : 'conversation-bubble-ai'} max-w-md`}>
        {/* <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p> */}
        <ReactMarkdown className="text-sm leading-relaxed whitespace-pre-wrap">
          {message}
        </ReactMarkdown>
        {timestamp && (
          <div className={`text-xs mt-2 opacity-70 ${isUser ? 'text-right' : 'text-left'}`}>
            {formatTime(timestamp)}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 ml-3 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name="User" size={16} color="white" strokeWidth={2} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;

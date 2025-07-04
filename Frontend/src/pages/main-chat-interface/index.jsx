import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import Icon from '../../components/AppIcon';
import { useNavigate } from "react-router-dom";


const MainChatInterface = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  //const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [sessionId, setSessionId] = useState(() => {
    const existing = localStorage.getItem("chatSessionId");
    if (existing) return existing;
    const newSession = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("chatSessionId", newSession);
    return newSession;
  });

    const handleSendMessage = useCallback(async (messageContent) => {
      const userMessage = {
        id: `msg_${Date.now()}_user`,
        content: messageContent,
        isUser: true,
        timestamp: new Date(),
        sessionId
      };

      // Add user message
      setMessages(prev => {
        const updated = [...prev, userMessage];
        localStorage.setItem(`chatMessages_${sessionId}`, JSON.stringify(updated));
        return updated;
      });

      setIsTyping(true);
      setHasStartedChat(true);

      try {
        const response = await fetch("https://chatbot-7k2k.onrender.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: messageContent,
            session_id: sessionId
          })
        });

        const data = await response.json();
        console.log("Backend response:", data);

        const assistantMessage = {
          id: `msg_${Date.now()}_ai`,
          content: data.response || "⚠️ No response received from the server.",
          isUser: false,
          timestamp: new Date(),
          sessionId
        };

        setMessages(prev => {
          const updated = [...prev, assistantMessage];
          localStorage.setItem(`chatMessages_${sessionId}`, JSON.stringify(updated));
          return updated;
        });

      } catch (error) {
        console.error("Error fetching AI response:", error);

        const errorMessage = {
          id: `msg_${Date.now()}_ai_error`,
          content: "⚠️ Something went wrong while contacting the assistant.",
          isUser: false,
          timestamp: new Date(),
          sessionId
        };

        setMessages(prev => {
          const updated = [...prev, errorMessage];
          localStorage.setItem(`chatMessages_${sessionId}`, JSON.stringify(updated));
          return updated;
        });

      } finally {
        setIsTyping(false);
      }
    }, [sessionId]);


  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focus input with Ctrl + K
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const textarea = document.querySelector('textarea');
        if (textarea) {
          textarea.focus();
        }
      }

      // Clear conversation with Ctrl + L
      if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        setMessages([]);
        setHasStartedChat(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

    useEffect(() => {
      const saved = localStorage.getItem(`chatMessages_${sessionId}`);
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        const welcomeMessage = {
          id: 'welcome_msg',
          content: `Hello! I'm your AI assistant. I'm here to help you with questions, provide information, brainstorm ideas, or just have a friendly conversation.\n\nWhat would you like to talk about today?`,
          isUser: false,
          timestamp: new Date(),
          sessionId
        };
        setMessages([welcomeMessage]);
      }
    }, [sessionId]);
    // Save messages to localStorage when they change
    useEffect(() => {
      if (messages.length > 0) {
        localStorage.setItem(`chatMessages_${sessionId}`, JSON.stringify(messages));
      }
    }, [messages, sessionId]);


  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-gentle">
          <Icon name="Bot" size={24} color="white" strokeWidth={2} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse-gentle"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-text-primary tracking-tight">
          ChatSphere
        </span>
        <span className="text-xs text-text-secondary font-medium">
          Conversations that feel natural
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Header with ChatSphere branding and Home button */}
      <div className="bg-surface border-b border-border px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/welcome-onboarding" className="flex-shrink-0 transition-smooth hover:opacity-80">
            <Logo />
          </Link>

          {/* Home Button */}
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
      
      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col">
        {/* Chat Messages Container */}
        <ChatContainer 
          messages={messages} 
          isTyping={isTyping}
          hasStartedChat={hasStartedChat}
        />
        {/* New Chat Button */}
        <div className="mb-4 flex justify-end max-w-4xl mx-auto">
          <button
            onClick={() => {
              const newSession = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
              localStorage.setItem("chatSessionId", newSession);
              setSessionId(newSession);
              setMessages([]);
              setHasStartedChat(false);
            }}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-lg border border-gray-300 transition"
          >
            + New Chat
          </button>
        </div>
        {/* Chat Input */}
        <div className="bg-surface border-t border-border px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <ChatInput 
              onSendMessage={handleSendMessage}
              isLoading={isTyping}
              hasStartedChat={hasStartedChat}
            />
          </div>
        </div>

        {/* Session ID Display */}
        <div className="bg-surface px-4 py-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-text-muted">
              Session ID: {sessionId}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainChatInterface;
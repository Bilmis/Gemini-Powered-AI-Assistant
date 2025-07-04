import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
//import ReactMarkdown from 'react-markdown';

const PracticeSection = ({ onNext, onBack }) => {
  const [messages, setMessages] = useState([
    // {
    //   id: 1,
    //   type: 'ai',
    //   content: `Welcome to your practice conversation! I'm here to help you get comfortable with our AI interface.\n\nFeel free to ask me anything - whether it's about work, creative projects, or just casual conversation. I'll adapt my responses to help you learn how our system works.\n\nWhat would you like to explore first?`,
    //   timestamp: new Date()
    // }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTips, setShowTips] = useState(true);

  const tips = [
    {
      icon: "MessageSquare",
      title: "Natural Language",
      description: "Type as you would speak to a colleague - no special commands needed"
    },
    {
      icon: "Mic",
      title: "Voice Input",
      description: "Click the microphone icon to speak your message instead of typing"
    },
    {
      icon: "Download",
      title: "Export Conversations",
      description: "Save important conversations for future reference"
    },
    {
      icon: "History",
      title: "Conversation Memory",
      description: "I remember context from earlier in our conversation"
    }
  ];

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generatePracticeResponse(messageText);
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // const generatePracticeResponse = (userInput) => {
  //   const responses = {
  //     morning: `Great question about morning routines! Here's a productive framework:\n\n**The 90-Minute Power Start:**\n• 6:00 AM - Wake up, hydrate (16oz water)\n• 6:15 AM - 10 minutes meditation or stretching\n• 6:30 AM - Review daily priorities (3 key tasks)\n• 7:00 AM - Focused work on most important task\n• 8:30 AM - Healthy breakfast\n• 9:00 AM - Ready for the day\n\nThe key is consistency and starting with your most challenging work when your energy is highest. Would you like me to customize this based on your specific schedule?`,
      
  //     creative: `I love creative brainstorming! Here are some weekend project ideas:\n\n**Digital Projects:**\n• Create a personal website or blog\n• Learn photography and start a photo series\n• Build a simple mobile app or game\n\n**Hands-on Projects:**\n• Upcycle furniture with creative painting techniques\n• Start a container garden with herbs or vegetables\n• Learn calligraphy and create custom art pieces\n\n**Community Projects:**\n• Organize a neighborhood skill-sharing event\n• Create care packages for local shelters\n• Start a book club or walking group\n\nWhat type of creative expression interests you most?`,
      
  //     explain: `I'd be happy to explain complex topics simply! Here's my approach:\n\n**The Explanation Framework:**\n1. **Start with the big picture** - What is this and why does it matter?\n2. **Use analogies** - Compare to familiar concepts\n3. **Break into steps** - Divide complexity into manageable parts\n4. **Provide examples** - Show real-world applications\n5. **Check understanding** - Ask if clarification is needed\n\nFor example, if explaining blockchain: "Think of it like a digital ledger that everyone has a copy of, so no one can cheat."\n\nWhat complex topic would you like me to break down for you?`,
      
  //     work: `Work challenges are my specialty! Here's how I approach problem-solving:\n\n**The CLEAR Method:**\n• **C**larify the real problem (not just symptoms)\n• **L**ist possible solutions (brainstorm freely)\n• **E**valuate each option (pros, cons, resources needed)\n• **A**ct on the best solution (create specific steps)\n• **R**eview results (learn and adjust)\n\nI can help you work through any specific challenge - team communication, project management, time management, or technical issues.\n\nWhat work challenge would you like to tackle together?`,
      
  //     default: `That's an interesting question! I can help you explore this topic further.\n\nBased on what you've shared, here are a few ways I could assist:\n• Provide detailed information and explanations\n• Help you brainstorm solutions or ideas\n• Break down complex concepts into manageable parts\n• Offer different perspectives on the situation\n\nWhat specific aspect would you like to dive deeper into? I'm here to adapt my response style to what works best for you.`
  //   };

  //   const input = userInput.toLowerCase();
  //   if (input.includes('morning') || input.includes('routine')) return responses.morning;
  //   if (input.includes('creative') || input.includes('project') || input.includes('weekend')) return responses.creative;
  //   if (input.includes('explain') || input.includes('simple') || input.includes('complex')) return responses.explain;
  //   if (input.includes('work') || input.includes('challenge') || input.includes('problem')) return responses.work;
    
  //   return responses.default;
  // };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Practice Conversation
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Try out the chat interface in a safe environment. Ask questions, explore features, and get comfortable with AI interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Tips Sidebar */}
        {showTips && (
          <div className="lg:col-span-1">
            <div className="bg-surface border border-border rounded-2xl p-6 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">Helpful Tips</h3>
                <button
                  onClick={() => setShowTips(false)}
                  className="text-text-secondary hover:text-text-primary"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={tip.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">{tip.title}</h4>
                      <p className="text-xs text-text-secondary mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-medium text-text-primary text-sm mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full text-left text-xs text-text-secondary hover:text-primary flex items-center space-x-2">
                    <Icon name="Download" size={12} />
                    <span>Export this conversation</span>
                  </button>
                  <button className="w-full text-left text-xs text-text-secondary hover:text-primary flex items-center space-x-2">
                    <Icon name="RotateCcw" size={12} />
                    <span>Start over</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        <div className={`${showTips ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <Icon name="Bot" size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Practice Assistant</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs text-text-secondary">Online • Ready to help</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-secondary">
                    <Icon name="Settings" size={16} />
                  </button>
                  {!showTips && (
                    <button
                      onClick={() => setShowTips(true)}
                      className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-secondary"
                    >
                      <Icon name="HelpCircle" size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl px-4 py-3 rounded-2xl ${
                      message.type === 'user' ?'bg-primary text-primary-foreground' :'bg-background border border-border text-text-primary'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {message.content}
                    </p>
                    {/* <ReactMarkdown className="text-sm leading-relaxed prose prose-sm max-w-none text-text-primary">
                      {message.content}
                    </ReactMarkdown> */}
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border rounded-2xl px-4 py-3">
                    <div className="typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="px-6 py-4 border-t border-border bg-surface-secondary">
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Type your message here... (Press Enter to send)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-text-secondary hover:text-primary rounded-lg hover:bg-surface transition-colors">
                    <Icon name="Mic" size={20} />
                  </button>
                  
                  <Button
                    variant="primary"
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    iconName="Send"
                    size="sm"
                  >
                    Send
                  </Button>
                </div>
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
          Complete Setup
        </Button>
      </div>
    </div>
  );
};

export default PracticeSection;
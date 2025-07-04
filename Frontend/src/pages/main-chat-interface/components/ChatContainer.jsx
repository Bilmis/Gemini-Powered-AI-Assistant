// import React, { useRef, useEffect } from 'react';
// import ChatMessage from './ChatMessage';

// const ChatContainer = ({ messages, isTyping = false, hasStartedChat = false }) => {
//   const messagesEndRef = useRef(null);
//   const containerRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const handleScroll = (e) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.target;
//     const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    
//     // Add scroll indicator logic here if needed
//   };

//   return (
//     <div className="flex-1 relative">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 opacity-30"></div>
      
//       {/* Messages Container */}
//       <div 
//         ref={containerRef}
//         className="relative h-full overflow-y-auto scrollbar-hide px-4 py-6"
//         onScroll={handleScroll}
//       >
//         <div className="max-w-4xl mx-auto">
//           {messages.length === 0 ? (
//             // Welcome State
//             <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
//               <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-conversation">
//                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
//                   <span className="text-2xl">🤖</span>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h2 className="text-2xl font-semibold text-text-primary">
//                   Welcome to ChatSphere
//                 </h2>
//                 <p className="text-text-secondary max-w-md leading-relaxed">
//                   Start a conversation with our AI assistant. Ask questions, get help, or just chat about anything you'd like to know.
//                 </p>
//               </div>

//               {/* Quick Start Suggestions */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
//                 {[
//                   { icon: '💡', text: 'Get creative ideas' },
//                   { icon: '📚', text: 'Learn something new' },
//                   { icon: '🔧', text: 'Solve a problem' },
//                   { icon: '💬', text: 'Have a conversation' }
//                 ].map((item, index) => (
//                   <div 
//                     key={index}
//                     className="flex items-center space-x-3 p-3 bg-surface border border-border rounded-xl hover:shadow-conversation transition-smooth cursor-pointer"
//                   >
//                     <span className="text-lg">{item.icon}</span>
//                     <span className="text-sm font-medium text-text-primary">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             // Messages List
//             <div className="space-y-1">
//               {messages.map((message, index) => (
//                 <ChatMessage
//                   key={message.id || index}
//                   message={message.content}
//                   isUser={message.isUser}
//                   timestamp={message.timestamp}
//                 />
//               ))}
              
//               {/* Typing Indicator */}
//               {isTyping && (
//                 <ChatMessage isTyping={true} />
//               )}
//             </div>
//           )}
          
//           {/* Scroll Anchor */}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Scroll to Bottom Button */}
//       {messages.length > 5 && (
//         <button
//           onClick={scrollToBottom}
//           className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full shadow-conversation hover:shadow-lg transition-smooth focus-ring flex items-center justify-center"
//           aria-label="Scroll to bottom"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };

// export default ChatContainer;
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatContainer = ({ messages, isTyping = false, hasStartedChat = false }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
  };

  return (
    <div className="flex-1 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 opacity-30"></div>
      
      {/* Messages Container */}
      <div 
        ref={containerRef}
        className="relative h-full overflow-y-auto scrollbar-hide px-4 py-6"
        onScroll={handleScroll}
      >
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? null : (
            // Messages List
            <div className="space-y-1">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id || index}
                  message={message.content}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && (
                <ChatMessage isTyping={true} />
              )}
            </div>
          )}

          {/* Scroll Anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Scroll to Bottom Button */}
      {messages.length > 5 && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full shadow-conversation hover:shadow-lg transition-smooth focus-ring flex items-center justify-center"
          aria-label="Scroll to bottom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatContainer;

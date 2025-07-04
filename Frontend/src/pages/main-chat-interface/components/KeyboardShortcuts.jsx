import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const KeyboardShortcuts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const shortcuts = [
    { key: 'Enter', description: 'Send message' },
    { key: 'Shift + Enter', description: 'New line in message' },
    { key: 'Ctrl + K', description: 'Focus message input' },
    { key: 'Ctrl + L', description: 'Clear conversation' },
    { key: 'Ctrl + /', description: 'Show/hide shortcuts' },
    { key: 'Esc', description: 'Close shortcuts panel' },
    { key: 'Ctrl + R', description: 'Refresh connection' },
    { key: 'Ctrl + S', description: 'Save conversation' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle shortcuts panel with Ctrl + /
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      
      // Close with Escape
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  // Auto-hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Keyboard Shortcuts Hint */}
      {showHint && !isVisible && (
        <div className="fixed bottom-4 left-4 z-40 bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-conversation conversation-entrance">
          <div className="flex items-center space-x-2">
            <Icon name="Keyboard" size={16} color="var(--color-text-secondary)" />
            <span className="text-xs text-text-secondary">Press</span>
            <kbd className="px-2 py-1 bg-surface-secondary rounded text-xs font-mono">Ctrl + /</kbd>
            <span className="text-xs text-text-secondary">for shortcuts</span>
            <button
              onClick={() => setShowHint(false)}
              className="ml-2 p-1 hover:bg-surface-secondary rounded transition-smooth"
            >
              <Icon name="X" size={12} color="var(--color-text-muted)" />
            </button>
          </div>
        </div>
      )}

      {/* Shortcuts Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-surface border border-border rounded-2xl shadow-2xl max-w-md w-full mx-4 conversation-entrance">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Keyboard" size={20} color="var(--color-primary)" />
                <h3 className="text-lg font-semibold text-text-primary">Keyboard Shortcuts</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-surface-secondary rounded-lg transition-smooth focus-ring"
              >
                <Icon name="X" size={16} color="var(--color-text-secondary)" />
              </button>
            </div>

            {/* Shortcuts List */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-sm text-text-primary">{shortcut.description}</span>
                  <div className="flex items-center space-x-1">
                    {shortcut.key.split(' + ').map((key, keyIndex) => (
                      <React.Fragment key={keyIndex}>
                        {keyIndex > 0 && <span className="text-xs text-text-muted">+</span>}
                        <kbd className="px-2 py-1 bg-surface-secondary text-text-primary rounded text-xs font-mono border border-border">
                          {key}
                        </kbd>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-surface-secondary rounded-b-2xl">
              <div className="flex items-center space-x-2 text-xs text-text-muted">
                <Icon name="Info" size={14} color="var(--color-text-muted)" />
                <span>These shortcuts work throughout the chat interface</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardShortcuts;
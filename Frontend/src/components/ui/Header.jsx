import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Chat Interface', path: '/main-chat-interface', icon: 'MessageCircle' },
    { name: 'Welcome', path: '/welcome-onboarding', icon: 'Sparkles' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-smooth hover:opacity-80">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-smooth ${
                  item.name === 'Welcome'
                    ? 'bg-primary text-primary-foreground shadow-conversation'
                    : isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-conversation'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={18} 
                  color={isActivePath(item.path) ? 'currentColor' : 'var(--color-text-secondary)'} 
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* CTA Button */}
            <Link to="/main-chat-interface">
              <Button 
                variant="primary" 
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="pulse-gentle"
              >
                Start Conversation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-smooth focus-ring"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4 animate-slide-in-up">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-conversation'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                  }`}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    color={isActivePath(item.path) ? 'currentColor' : 'var(--color-text-secondary)'} 
                  />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              {/* Mobile CTA */}
              <div className="px-4">
                <Button 
                  variant="primary" 
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"x
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start New Conversation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
"use client";

import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: 'dashboard' | 'courses' | 'students' | 'analytics') => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile?: boolean;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, value: 'dashboard' as const },
  { name: 'Courses', icon: BookOpen, value: 'courses' as const },
  { name: 'Students', icon: Users, value: 'students' as const },
  { name: 'Analytics', icon: BarChart3, value: 'analytics' as const },
] as const;

export function Sidebar({ activeView, setActiveView, isOpen, setIsOpen, isMobile = false }: SidebarProps) {
  const handleNavClick = (value: typeof navigation[number]['value']) => {
    setActiveView(value);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-white border-r border-gray-200 transition-all duration-300 shadow-lg",
        isMobile 
          ? isOpen 
            ? "w-64 translate-x-0" 
            : "w-64 -translate-x-full"
          : isOpen 
            ? "w-64" 
            : "w-16"
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <div className={cn("flex items-center gap-2", !isOpen && !isMobile && "justify-center")}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              {(isOpen || isMobile) && (
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LearnHub
                </span>
              )}
            </div>
            
            {isMobile ? (
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors md:hidden"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors hidden md:block"
                aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
              >
                {isOpen ? (
                  <ChevronLeft className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = activeView === item.value;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.value)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    !isOpen && !isMobile && "justify-center px-2"
                  )}
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {(isOpen || isMobile) && <span>{item.name}</span>}
                </button>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="p-3 border-t border-gray-200">
            <button
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",
                !isOpen && !isMobile && "justify-center px-2"
              )}
              aria-label="Settings"
            >
              <Settings className="h-5 w-5 flex-shrink-0" />
              {(isOpen || isMobile) && <span>Settings</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
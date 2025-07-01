"use client";

import { Search, Bell, Menu, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  activeView: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isMobile?: boolean;
}

const viewTitles = {
  dashboard: 'Dashboard',
  courses: 'Courses',
  students: 'Students',
  analytics: 'Analytics'
} as const;

export function Header({ activeView, sidebarOpen, setSidebarOpen, isMobile = false }: HeaderProps) {
  const title = viewTitles[activeView as keyof typeof viewTitles] || 'Dashboard';

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-3 md:gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Desktop Search */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search..."
            className="w-64 xl:w-80 pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            aria-label="Search"
          />
        </div>
        
        {/* Mobile Search Button */}
        <Button variant="ghost" size="sm" className="lg:hidden p-2" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="sm" className="relative p-2" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" aria-hidden="true"></span>
        </Button>

        <div className="flex items-center gap-2 md:gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage 
              src="/assets/images/user/user1.jpeg" 
              alt="Sarah Johnson"
            />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
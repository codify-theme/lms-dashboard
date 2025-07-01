"use client";

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { DashboardOverview } from '@/components/dashboard/dashboard-overview';
import { CoursesView } from '@/components/courses/courses-view';
import { StudentsView } from '@/components/students/students-view';
import { AnalyticsView } from '@/components/analytics/analytics-view';
import { HydrationBoundary } from '@/components/ui/hydration-boundary';

type ViewType = 'dashboard' | 'courses' | 'students' | 'analytics';

export default function HomePage() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderView = (): JSX.Element => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'courses':
        return <CoursesView />;
      case 'students':
        return <StudentsView />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <HydrationBoundary fallback={
      <div className="flex h-screen bg-gray-50">
        <div className="hidden md:block w-64 bg-white border-r border-gray-200"></div>
        <div className="flex-1 flex flex-col">
          <div className="h-16 bg-white border-b border-gray-200"></div>
          <div className="flex-1 p-4 md:p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/2 md:w-1/4"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isMobile={isMobile}
        />
        
        <div className={`flex-1 flex flex-col transition-all duration-300 min-w-0 ${
          !isMobile && sidebarOpen ? 'md:ml-64' : !isMobile ? 'md:ml-16' : ''
        }`}>
          <Header 
            activeView={activeView}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            isMobile={isMobile}
          />
          <main className="flex-1 overflow-auto p-4 md:p-6">
            {renderView()}
          </main>
        </div>
      </div>
    </HydrationBoundary>
  );
}
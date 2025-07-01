"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard } from '@/components/dashboard/metric-card';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { CourseProgress } from '@/components/dashboard/course-progress';
import { EnrollmentChart } from '@/components/dashboard/enrollment-chart';
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';

export function DashboardOverview() {
  const metrics = [
    {
      title: 'Total Students',
      value: '2,847',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue' as const
    },
    {
      title: 'Active Courses',
      value: '142',
      change: '+8.2%',
      trend: 'up' as const,
      icon: BookOpen,
      color: 'emerald' as const
    },
    {
      title: 'Completion Rate',
      value: '87.3%',
      change: '+5.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple' as const
    },
    {
      title: 'Certificates Issued',
      value: '1,234',
      change: '+23.1%',
      trend: 'up' as const,
      icon: Award,
      color: 'orange' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <EnrollmentChart />
        </div>
        <div className="xl:col-span-1">
          <RecentActivity />
        </div>
      </div>

      {/* Course Progress */}
      <CourseProgress />
    </div>
  );
}
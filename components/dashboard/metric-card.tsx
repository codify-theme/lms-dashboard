"use client";

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'blue' | 'emerald' | 'purple' | 'orange';
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600'
} as const;

export function MetricCard({ title, value, change, trend, icon: Icon, color }: MetricCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div className="flex items-center mt-2">
              {trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" aria-hidden="true" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" aria-hidden="true" />
              )}
              <span className={cn(
                "text-sm font-medium",
                trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              )}>
                {change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
          <div className={cn(
            "p-3 rounded-lg bg-gradient-to-r shadow-lg",
            colorClasses[color]
          )}>
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
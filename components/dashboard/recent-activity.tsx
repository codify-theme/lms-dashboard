"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, UserPlus, Award, MessageSquare } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'enrollment',
    user: 'John Smith',
    action: 'enrolled in',
    target: 'React Fundamentals',
    time: '2 minutes ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    icon: UserPlus,
    color: 'text-blue-600'
  },
  {
    id: 2,
    type: 'completion',
    user: 'Emily Davis',
    action: 'completed',
    target: 'JavaScript Basics',
    time: '15 minutes ago',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    icon: Award,
    color: 'text-emerald-600'
  },
  {
    id: 3,
    type: 'course',
    user: 'Michael Chen',
    action: 'started',
    target: 'Advanced TypeScript',
    time: '1 hour ago',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    icon: BookOpen,
    color: 'text-purple-600'
  },
  {
    id: 4,
    type: 'discussion',
    user: 'Sarah Wilson',
    action: 'posted in',
    target: 'UI/UX Design Forum',
    time: '2 hours ago',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    icon: MessageSquare,
    color: 'text-orange-600'
  }
];

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.avatar} />
              <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-gray-600"> {activity.action} </span>
                  <span className="font-medium">{activity.target}</span>
                </p>
              </div>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
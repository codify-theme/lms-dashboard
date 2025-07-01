"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'React Fundamentals',
    instructor: 'Alex Johnson',
    enrolled: 234,
    completed: 187,
    progress: 80,
    category: 'Frontend',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Maria Garcia',
    enrolled: 189,
    completed: 142,
    progress: 75,
    category: 'JavaScript',
    level: 'Advanced'
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    instructor: 'David Kim',
    enrolled: 156,
    completed: 98,
    progress: 63,
    category: 'Design',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'Node.js Backend Development',
    instructor: 'Lisa Wong',
    enrolled: 198,
    completed: 134,
    progress: 68,
    category: 'Backend',
    level: 'Intermediate'
  }
];

export function CourseProgress() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Course Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">by {course.instructor}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{course.enrolled} enrolled</span>
                  <span>{course.completed} completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Filter, MoreVertical, Users, Clock, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics of React including components, props, and state management.',
    instructor: 'Alex Johnson',
    image: '/assets/images/course/c1.jpeg',
    category: 'Frontend',
    level: 'Beginner',
    duration: '8 weeks',
    enrolled: 234,
    rating: 4.8,
    status: 'Published',
    price: '$79'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced JavaScript concepts, async programming, and modern ES6+ features.',
    instructor: 'Maria Garcia',
    image: '/assets/images/course/c2.jpeg',
    category: 'JavaScript',
    level: 'Advanced',
    duration: '12 weeks',
    enrolled: 189,
    rating: 4.9,
    status: 'Published',
    price: '$129'
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    description: 'Master the fundamentals of user interface and user experience design.',
    instructor: 'David Kim',
    image: '/assets/images/course/c3.jpeg',
    category: 'Design',
    level: 'Intermediate',
    duration: '10 weeks',
    enrolled: 156,
    rating: 4.7,
    status: 'Draft',
    price: '$99'
  },
  {
    id: 4,
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
    instructor: 'Lisa Wong',
    image: '/assets/images/course/c4.jpeg',
    category: 'Backend',
    level: 'Intermediate',
    duration: '14 weeks',
    enrolled: 198,
    rating: 4.6,
    status: 'Published',
    price: '$149'
  }
];

export function CoursesView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Courses</h2>
          <p className="text-gray-600 text-sm md:text-base">Manage your course catalog</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>
                  {course.status}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.enrolled}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">{course.price}</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">Edit</Button>
                  <Button size="sm" variant="outline">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
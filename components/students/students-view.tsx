"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, MoreVertical, Mail, Phone, BookOpen } from 'lucide-react';

const students = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    avatar: '/assets/images/student/st1.jpeg',
    joinDate: '2024-01-15',
    coursesEnrolled: 3,
    coursesCompleted: 1,
    overallProgress: 67,
    status: 'Active',
    currentCourse: 'React Fundamentals'
  },
  {
    id: 2,
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '+1 (555) 234-5678',
    avatar: '/assets/images/student/st2.jpeg',
    joinDate: '2024-02-03',
    coursesEnrolled: 5,
    coursesCompleted: 3,
    overallProgress: 85,
    status: 'Active',
    currentCourse: 'Advanced JavaScript'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 345-6789',
    avatar: '/assets/images/student/st3.jpeg',
    joinDate: '2023-11-20',
    coursesEnrolled: 4,
    coursesCompleted: 4,
    overallProgress: 100,
    status: 'Graduated',
    currentCourse: 'Completed All Courses'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    phone: '+1 (555) 456-7890',
    avatar: '/assets/images/student/st4.jpeg',
    joinDate: '2024-03-10',
    coursesEnrolled: 2,
    coursesCompleted: 0,
    overallProgress: 23,
    status: 'Active',
    currentCourse: 'UI/UX Design Principles'
  },
  {
    id: 5,
    name: 'David Rodriguez',
    email: 'david.rodriguez@email.com',
    phone: '+1 (555) 567-8901',
    avatar: '/assets/images/student/st5.jpeg',
    joinDate: '2024-01-28',
    coursesEnrolled: 1,
    coursesCompleted: 0,
    overallProgress: 45,
    status: 'Inactive',
    currentCourse: 'Node.js Backend Development'
  }
];

export function StudentsView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Students</h2>
          <p className="text-gray-600 text-sm md:text-base">Manage student enrollments and progress</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search students..."
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

      {/* Students List */}
      <div className="grid gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 flex-shrink-0">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{student.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{student.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{student.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-sm text-gray-600">Current Course</p>
                      <p className="font-medium truncate">{student.currentCourse}</p>
                    </div>
                    <Badge variant={
                      student.status === 'Active' ? 'default' :
                      student.status === 'Graduated' ? 'secondary' : 'destructive'
                    }>
                      {student.status}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Overall Progress</span>
                      <span className="font-medium">{student.overallProgress}%</span>
                    </div>
                    <Progress value={student.overallProgress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        <span className="text-lg font-semibold">{student.coursesEnrolled}</span>
                      </div>
                      <p className="text-xs text-gray-600">Enrolled</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <BookOpen className="h-4 w-4 text-emerald-600" />
                        <span className="text-lg font-semibold">{student.coursesCompleted}</span>
                      </div>
                      <p className="text-xs text-gray-600">Completed</p>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{new Date(student.joinDate).toLocaleDateString()}</div>
                      <p className="text-xs text-gray-600">Join Date</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row lg:flex-col gap-2 lg:w-auto w-full">
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">View Details</Button>
                  <Button size="sm" variant="ghost" className="lg:w-full">
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
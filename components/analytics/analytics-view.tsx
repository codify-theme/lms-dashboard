"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const enrollmentData = [
  { month: 'Jan', enrollments: 120, completions: 85 },
  { month: 'Feb', enrollments: 150, completions: 110 },
  { month: 'Mar', enrollments: 180, completions: 125 },
  { month: 'Apr', enrollments: 220, completions: 160 },
  { month: 'May', enrollments: 280, completions: 200 },
  { month: 'Jun', enrollments: 320, completions: 245 },
];

const courseDistribution = [
  { name: 'Frontend', value: 35, color: '#3B82F6' },
  { name: 'Backend', value: 25, color: '#10B981' },
  { name: 'Design', value: 20, color: '#8B5CF6' },
  { name: 'Data Science', value: 15, color: '#F59E0B' },
  { name: 'Mobile', value: 5, color: '#EF4444' }
];

const performanceData = [
  { category: 'Beginner', completion: 85, satisfaction: 92 },
  { category: 'Intermediate', completion: 78, satisfaction: 88 },
  { category: 'Advanced', completion: 65, satisfaction: 85 }
];

export function AnalyticsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-600 text-sm md:text-base">Insights into course performance and student engagement</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-[80px] md:mb-[30px]">
          <TabsTrigger value="overview" className="text-xs md:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="courses" className="text-xs md:text-sm">Courses</TabsTrigger>
          <TabsTrigger value="students" className="text-xs md:text-sm">Students</TabsTrigger>
          <TabsTrigger value="revenue" className="text-xs md:text-sm">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Enrollment vs Completion Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="enrollments" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="completions" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Course Category Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={courseDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      fontSize={12}
                    >
                      {courseDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Performance by Course Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="category" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="completion" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="satisfaction" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Course Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Detailed course performance metrics coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Student Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Student engagement and progress analytics coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Revenue and financial analytics coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
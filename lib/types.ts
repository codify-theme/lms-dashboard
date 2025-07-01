export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  enrolled: number;
  rating: number;
  status: 'Published' | 'Draft';
  price: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinDate: string;
  coursesEnrolled: number;
  coursesCompleted: number;
  overallProgress: number;
  status: 'Active' | 'Inactive' | 'Graduated';
  currentCourse: string;
}

export interface Activity {
  id: number;
  type: 'enrollment' | 'completion' | 'course' | 'discussion';
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
  icon: any;
  color: string;
}

export interface ChartData {
  month: string;
  enrollments: number;
  completions: number;
}

export interface MetricData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: 'blue' | 'emerald' | 'purple' | 'orange';
}
import { Calendar, ChartArea, Clock, FileVideo, Globe } from 'lucide-react';

import type { Course } from '../data/courses';

export function getDays(days: Course['days']) {
  return days.reduce(
    (previousValue, currentValue) => `${previousValue}, ${currentValue}`,
  );
}

export function getCourseInfo(course: Course) {
  getDays(course.days);

  return [
    {
      icon: FileVideo,
      styles: 'text-blue-500 bg-blue-100',
      title: 'lessons',
      value: `${course.lessonsCount.toString()} Lesson`,
    },
    {
      icon: ChartArea,
      styles: 'text-orange-500 bg-orange-100',
      title: 'level',
      value: course.level,
    },
    {
      icon: Globe,
      styles: 'text-purple-500 bg-purple-100',
      title: 'language',
      value: course.language,
    },
    ...getCourseDateInfo(course),
  ];
}

export function getCourseDateInfo(course: Course) {
  return [
    {
      icon: Clock,
      styles: 'text-rose-500 bg-rose-100',
      title: 'duration',
      value: course.duration,
    },
    {
      icon: Calendar,
      styles: 'text-green-500 bg-green-100',
      title: 'days',
      value: getDays(course.days),
    },
    {
      icon: Clock,
      styles: 'text-cyan-500 bg-cyan-100',
      title: 'time',
      value: course.time,
    },
  ];
}

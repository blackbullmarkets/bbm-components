export interface CourseCardProps {
  level: number;
  courseTitle: string;
  courseLink: string;
  featuredImage: string;
  excerpt: string;
  lessonNumber: number;
  lessonTotal: number;
  lessonDuration: number;
  ID: string;
}

export interface LessonListing {
  blockTitle: string;
  lessonList: CourseCardProps[];
}

import Typography from "../Typography/Typography";
import CourseCard from "../CourseCard/CourseCard";
import { LessonListing } from "@/data/types/couses";

export default function CourseCardBlock({
  lessonList,
  blockTitle,
}: LessonListing) {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" color="text-primary-default">
            {blockTitle}
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-5 px-5">
          {lessonList.length != 0 &&
            lessonList.map((lesson) => (
              <CourseCard
                excerpt={lesson.courseTitle}
                level={lesson.level}
                courseTitle={lesson.courseTitle}
                courseLink={lesson.courseLink}
                featuredImage={lesson.featuredImage}
                lessonNumber={lesson.lessonNumber}
                lessonDuration={lesson.lessonDuration}
                lessonTotal={lesson.lessonTotal}
                key={lesson.ID}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

import Typography from "../Typography/Typography";

interface IndividualLessonProps {
  title: string;
  content: string;
}

export default function IndividualLesson({
  title,
  content,
}: IndividualLessonProps) {
  return (
    <section>
      <article>
        <Typography variant="h2" color="text-black">
          {title}
        </Typography>
        <div>{content}</div>
      </article>
    </section>
  );
}

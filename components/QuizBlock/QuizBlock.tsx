import Typography from "../Typography/Typography";

interface QuizSingleQuestion {
  singleQuestion: string;
  isRightAnswer: boolean;
}
interface QuizProps {
  quizQuestion: string;
  options: QuizSingleQuestion[];
}

export default function QuizBlock({ quizQuestion, options }: QuizProps) {
  return (
    <section>
      <Typography variant="h4" color="text-black-default">
        {quizQuestion}
      </Typography>
      <ul>
        {options && options.map((option) => <li>{option.singleQuestion}</li>)}
      </ul>
    </section>
  );
}

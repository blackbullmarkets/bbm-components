interface QuizOptionProps {
  onClickFn: () => void;
  variant: string;
  answer: string;
}

export default function QuizOption({
  onClickFn,
  variant,
  answer,
}: QuizOptionProps) {
  let answerStyle = "";
  switch (variant) {
    case "unselected":
      answerStyle = "bg-white text-black-50 border-black-50";
      break;
    case "selected":
      answerStyle =
        "bg-light-default text-primary-default border-primary-default";
      break;
    case "success":
      answerStyle = "bg-success-light text-success-dark border-success-dark";
      break;
    case "error":
      answerStyle = "bg-danger-light text-danger-default border-danger-default";
      break;
  }
  return (
    <li
      onClick={onClickFn}
      className={`${answerStyle} rounded-xm border-2 px-6 py-3 my-4 font-bold`}
    >
      {answer}
    </li>
  );
}

"use client";

import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useState } from "react";
import QuizOption from "../QuizOption/QuizOption";

interface QuizAnswer {
  answer: string;
  isRightAnswer: boolean;
  selected: boolean;
  variant: string;
}
interface QuizProps {
  quizQuestion: string;
  options: QuizAnswer[];
  nextButtonFn: any;
}

function defaultFn() {
  alert("blackbull!");
}

export default function QuizBlock({
  quizQuestion,
  options,
  nextButtonFn = defaultFn,
}: QuizProps) {
  const [buttonState, setButtonState] = useState("inactive");
  const [answers, setAnswers] = useState(options);
  const [showNext, setShowNext] = useState(false);

  function selectAnswer(i: number) {
    setButtonState("primary");
    const newAnswers = [...options];
    newAnswers.map((ans, index) => {
      ans.variant = index === i ? "selected" : "unselected";
    });
    setAnswers(newAnswers);
  }
  function submitAnswer() {
    const newAnswers = [...options];
    newAnswers.map((ans, index) => {
      if (ans.variant === "selected") {
        if (ans.isRightAnswer) {
          ans.variant = "success";
          setButtonState("inactive");
          setShowNext(true);
        } else {
          ans.variant = "error";
        }
      }
    });
    setAnswers(newAnswers);
  }
  return (
    <div className="bg-lightgray p-14 rounded-xm">
      <Typography variant="h4" color="text-black-default">
        {quizQuestion}
      </Typography>
      <ul className="last:mb-0">
        {answers &&
          answers.map((answer, i) => (
            <QuizOption
              onClickFn={() => selectAnswer(i)}
              variant={answer.variant}
              answer={answer.answer}
            />
          ))}
      </ul>
      <div className="flex gap-4">
        <Button
          id="submitButton"
          variant={buttonState}
          label="Submit"
          size="lg"
          onClickFn={submitAnswer}
          bold
        />
        {showNext && (
          <Button
            id="nextButton"
            variant="success"
            label="Next"
            size="lg"
            onClickFn={nextButtonFn}
            bold
          />
        )}
      </div>
      <ul>
        {options &&
          options.map((option, i) => (
            <li>{option.selected && option.answer}</li>
          ))}
      </ul>
    </div>
  );
}
